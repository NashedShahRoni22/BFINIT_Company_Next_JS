"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import {
  getAssociatedTokenAddress,
  createTransferInstruction,
  createAssociatedTokenAccountInstruction,
  getAccount,
} from "@solana/spl-token";
import Container from "@/components/shared/Container";
import Heading from "./Heading";
import OrderDetailsCard from "./OrderDetailsCard";
import TokenBreakDown from "./TokenBreakDown";
import ChooseWallet from "./ChooseWallet";
import { ECOM_BASE_URL } from "@/config";
import { formatTokenAmount } from "@/utils/formatTokenAmount";

const MINT_ADDRESS = process.env.NEXT_PUBLIC_SPUMP_MINT_ADDRESS;
const RECEIVER_ADDRESS = process.env.NEXT_PUBLIC_RECEIVER_ADDRESS;
const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT;

export default function CryptoCheckout() {
  const { packageId, duration: durationQuery } = useParams();
  const [loadingPack, setLoadingPack] = useState(true);
  const [loadinEurToUsd, setLoadingEurToUsd] = useState(true);
  const [loadingRadiumPrice, setLoadingRadiumPrice] = useState(true);
  const [packDetails, setPackDetails] = useState({});
  const [eurToUsdRate, setEurToUsdRate] = useState(null);
  const [tokenRate, setTokenRate] = useState(null);

  const { pricing } = packDetails;
  const isYearly = pricing?.duration >= 12;
  const originalPrice = pricing?.selected_month_price;
  const discountAmount = isYearly ? originalPrice * 0.3 : 0;
  const subTotalPrice = originalPrice - discountAmount;
  const perMonthPrice = pricing?.base_price;
  const duration = isYearly ? "1 Year" : "1 Month";

  // radium prices
  const subTotalInUSD = eurToUsdRate ? subTotalPrice * eurToUsdRate : null;
  const radiumTotalPrice =
    subTotalInUSD && tokenRate ? subTotalInUSD / tokenRate : null;
  const formattedRadiumPrice = formatTokenAmount(radiumTotalPrice);

  // wallet connection status
  const [wallet, setWallet] = useState(null);
  const [walletError, setWalletError] = useState(null);

  // crypto payment
  const [txStatus, setTxStatus] = useState(null);
  const [txError, setTxError] = useState(null);
  const [signature, setSignature] = useState(null);

  // fetch package details
  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const res = await fetch(
          `${ECOM_BASE_URL}/api/v1/package/get-single/${packageId}/${durationQuery}`,
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data?.success) setPackDetails(data?.data);
      } catch (e) {
        console.error("Failed to fetch package details:", e);
      } finally {
        setLoadingPack(false);
      }
    };

    fetchPackageDetails();
  }, [packageId, durationQuery]);

  // fetch eur to usd rate
  useEffect(() => {
    const fetchEurToUsdRate = async () => {
      try {
        const res = await fetch("/api/exchange-rate");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (data?.rate) setEurToUsdRate(data?.rate);
      } catch (e) {
        console.error("Failed to fetch eur to usd rate:", e);
      } finally {
        setLoadingEurToUsd(false);
      }
    };

    fetchEurToUsdRate();
  }, []);

  // fetch radium price
  useEffect(() => {
    const fetchRadiumPrice = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_RAYDIUM_API_URL}?mints=${process.env.NEXT_PUBLIC_SPUMP_MINT_ADDRESS}`,
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (data?.success)
          setTokenRate(
            parseFloat(data.data[process.env.NEXT_PUBLIC_SPUMP_MINT_ADDRESS]),
          );
      } catch (e) {
        console.error("Failed to fetch token rate:", e);
      } finally {
        setLoadingRadiumPrice(false);
      }
    };

    fetchRadiumPrice();
  }, []);

  const connectWallet = async (name) => {
    setWalletError(null);
    try {
      let provider, publicKey;

      if (name === "Phantom") {
        provider = window?.phantom?.solana ?? window?.solana;
        if (!provider?.isPhantom) throw new Error("Phantom not installed");
        const resp = await provider.connect();
        publicKey = resp.publicKey.toString();
      } else {
        provider = window?.solflare;
        if (!provider?.isSolflare) throw new Error("Solflare not installed");
        await provider.connect();
        await new Promise((r) => setTimeout(r, 100));
        if (!provider.publicKey)
          throw new Error("Solflare: publicKey unavailable");
        publicKey = provider.publicKey.toString();
      }

      setWallet({ provider, publicKey, name });
    } catch (e) {
      setWalletError(e.message ?? `Failed to connect ${name}`);
    }
  };

  const disconnectWallet = async () => {
    try {
      await wallet?.provider?.disconnect();
    } catch {
      console.error("Failed to disconnect wallet");
    }
    setWallet(null);
  };

  const handlePay = async () => {
    if (!wallet || !radiumTotalPrice) return;
    setTxStatus("building");
    setTxError(null);
    setSignature(null);

    try {
      const connection = new Connection(RPC_ENDPOINT, "confirmed");
      const fromPubkey = new PublicKey(wallet.publicKey);
      const toPubkey = new PublicKey(RECEIVER_ADDRESS);
      const mintPubkey = new PublicKey(MINT_ADDRESS);

      // Get token decimals
      const mintInfo = await connection.getParsedAccountInfo(mintPubkey);
      const decimals = mintInfo.value?.data?.parsed?.info?.decimals ?? 6;
      const rawAmount = BigInt(
        Math.round(radiumTotalPrice * Math.pow(10, decimals)),
      );

      // Get ATAs
      const fromATA = await getAssociatedTokenAddress(mintPubkey, fromPubkey);
      const toATA = await getAssociatedTokenAddress(mintPubkey, toPubkey);

      const tx = new Transaction();

      // Create receiver ATA if it doesn't exist
      try {
        await getAccount(connection, toATA);
      } catch {
        tx.add(
          createAssociatedTokenAccountInstruction(
            fromPubkey,
            toATA,
            toPubkey,
            mintPubkey,
          ),
        );
      }

      // Add transfer instruction
      tx.add(createTransferInstruction(fromATA, toATA, fromPubkey, rawAmount));

      // Set blockhash and fee payer
      const { blockhash, lastValidBlockHeight } =
        await connection.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = fromPubkey;

      // Sign
      setTxStatus("awaiting");
      const signedTx = await wallet.provider.signTransaction(tx);

      // Broadcast & confirm
      setTxStatus("confirming");
      const sig = await connection.sendRawTransaction(signedTx.serialize(), {
        skipPreflight: false,
      });
      await connection.confirmTransaction(
        { signature: sig, blockhash, lastValidBlockHeight },
        "confirmed",
      );

      setSignature(sig);
      setTxStatus("success");
    } catch (e) {
      setTxError(e.message ?? "Transaction failed");
      setTxStatus("error");
    }
  };

  return (
    <main className="py-14 min-h-dvh md:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: heading */}
          <Heading />

          {/* Right: cards */}
          <div className="space-y-3">
            <OrderDetailsCard
              packDetails={packDetails}
              perMonthPrice={perMonthPrice}
              originalPrice={originalPrice}
              discountAmount={discountAmount}
              subTotalPrice={subTotalPrice}
              formattedRadiumPrice={formattedRadiumPrice}
              isYearly={isYearly}
              duration={duration}
              wallet={wallet}
            />
            <TokenBreakDown
              originalPrice={originalPrice}
              formattedRadiumPrice={formattedRadiumPrice}
              tokenRate={tokenRate}
              isYearly={isYearly}
            />
            <ChooseWallet
              wallet={wallet}
              walletError={walletError}
              onConnect={connectWallet}
              onDisconnect={disconnectWallet}
              formattedRadiumPrice={formattedRadiumPrice}
              onPay={handlePay}
              txStatus={txStatus}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
