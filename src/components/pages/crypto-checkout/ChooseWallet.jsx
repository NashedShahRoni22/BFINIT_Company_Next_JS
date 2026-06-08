import { cn } from "@/lib/utils";
import { ChevronRight, ShieldCheck, Wallet } from "lucide-react";

const wallets = [
  { name: "Phantom", letter: "P", color: "bg-purple-100 text-purple-700" },
  { name: "Solflare", letter: "S", color: "bg-orange-100 text-orange-700" },
];

const short = (addr) => (addr ? `${addr.slice(0, 4)}…${addr.slice(-4)}` : "");

export default function ChooseWallet({
  wallet,
  walletError,
  onConnect,
  onDisconnect,
  formattedRadiumPrice,
  onPay,
  txStatus,
  txError,
  signature,
}) {
  const isLoading = ["building", "awaiting", "confirming"].includes(txStatus);
  const isSuccess = txStatus === "success";
  const canPay = !!wallet && !!formattedRadiumPrice && !isLoading && !isSuccess;

  const payLabel = () => {
    if (isSuccess) return "✓ Payment Complete";
    if (isLoading) return "Processing…";
    if (!wallet) return "Connect a Wallet";
    return `Pay ${formattedRadiumPrice} SPUMP`;
  };

  return (
    <div>
      <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
        Choose Wallet
      </p>

      <div className="flex flex-col gap-2">
        {wallets.map(({ name, letter, color }) => {
          const isConnected = wallet?.name === name;
          return (
            <button
              key={name}
              onClick={() => (isConnected ? onDisconnect() : onConnect(name))}
              className={cn(
                "flex items-center cursor-pointer justify-between border rounded-xl px-4 py-3 transition-all group",
                isConnected
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-200 hover:border-gray-300",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm",
                    color,
                  )}
                >
                  {letter}
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {name}
                </span>
              </div>
              {isConnected ? (
                <span className="text-xs text-green-600 font-mono">
                  {short(wallet.publicKey)}
                </span>
              ) : (
                <ChevronRight
                  size={16}
                  className="text-gray-400 group-hover:text-gray-600 transition-colors"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Connected / idle indicator */}
      <div
        className={cn(
          "w-full mt-4 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium",
          wallet ? "text-green-500" : "text-gray-400",
        )}
      >
        {wallet ? (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            {wallet.name} connected
          </>
        ) : (
          <>
            <Wallet size={16} />
            Connect a wallet
          </>
        )}
      </div>

      {walletError && (
        <p className="text-xs text-red-500 text-center mt-1">{walletError}</p>
      )}

      {txStatus === "error" && txError && (
        <p className="text-xs text-red-500 text-center mt-1">{txError}</p>
      )}

      {isSuccess && txError && (
        <p className="text-xs text-amber-500 text-center mt-2">{txError}</p>
      )}

      {isSuccess && signature && (
        <a
          href={`https://solscan.io/tx/${signature}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-xs text-blue-500 text-center mt-1 underline"
        >
          View on Solscan
        </a>
      )}

      {/* Pay button */}
      <button
        onClick={onPay}
        disabled={!canPay}
        className={cn(
          "w-full mt-3 rounded-xl cursor-pointer py-3.5 text-sm font-semibold transition-all",
          isSuccess &&
            "bg-green-50 border border-green-200 text-green-600 cursor-default",
          canPay && "bg-blue-600 hover:bg-blue-500 text-white",
          !canPay &&
            !isSuccess &&
            "bg-gray-100 text-gray-400 cursor-not-allowed",
        )}
      >
        {payLabel()}
      </button>

      <div className="text-center mt-3 pb-2">
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
          <ShieldCheck size={12} />
          Secure checkout · Cancel anytime · Powered by BFinit
        </p>
      </div>
    </div>
  );
}
