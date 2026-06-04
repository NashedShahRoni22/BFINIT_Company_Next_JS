"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Heading() {
  const { packageId, duration } = useParams();

  return (
    <div className="space-y-3 max-w-xl">
      {/* Back + badge row */}
      <div className="flex items-center gap-2">
        <Link
          href={`/checkout/packages/${packageId}/${duration}`}
          className="inline-flex items-center gap-1.5 border border-gray-300 bg-white rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to checkout
        </Link>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
          Complete your payment
        </h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Connect your Solana wallet to pay with SPUMP.
        </p>
      </div>

      {/* Web3 Partner Banner */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-white border border-purple-100">
          <Image
            src="/icons/spump.webp"
            alt="SPUMP"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-widest text-purple-400 uppercase mb-0.5">
            Web3 Ecosystem Partner
          </p>
          <p className="text-xs text-purple-800 leading-relaxed">
            Bfinit is part of the Scotty Pumpkin Web3 Ecosystem · Pay with SPUMP
            and <span className="font-semibold">save up to 30%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
