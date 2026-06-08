export default function CryptoCheckoutSkeleton() {
  return (
    <>
      <div className="rounded-xl overflow-hidden border border-gray-200">
        {/* Blue header */}
        <div className="bg-[#1a3fcb] px-4 py-3">
          <p className="text-[10px] font-semibold tracking-widest text-blue-300 uppercase mb-1">
            Order Details
          </p>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="h-4 w-32 animate-pulse rounded bg-blue-400/40" />
              <div className="h-5 w-16 animate-pulse rounded-full bg-blue-400/40" />
            </div>
            <div className="space-y-2 text-right">
              <div className="h-5 w-20 animate-pulse rounded bg-blue-400/40 ml-auto" />
              <div className="h-3 w-14 animate-pulse rounded bg-blue-400/40 ml-auto" />
            </div>
          </div>
        </div>

        {/* White body */}
        <div className="bg-white px-4 py-3 space-y-3">
          <div className="flex justify-between">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          </div>
          <div className="flex justify-between">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          </div>
          <div className="flex justify-between border-t border-gray-100 pt-2">
            <div className="h-4 w-10 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          </div>

          {/* You pay */}
          <div className="bg-gray-50 rounded-lg px-3 py-2.5 flex items-center justify-between">
            <div className="h-3 w-14 animate-pulse rounded bg-gray-200" />
            <div className="h-6 w-28 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Wallet status */}
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-sm border border-gray-300 shrink-0" />
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Token Breakdown
        </p>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
          {/* Service Price */}
          <div className="flex items-center justify-between px-4 py-2.5">
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Renewal Interval */}
          <div className="flex items-center justify-between px-4 py-2.5">
            <div className="h-3 w-28 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-14 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Discount */}
          <div className="flex items-center justify-between px-4 py-2.5">
            <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-8 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Token Rates */}
          <div className="flex items-center justify-between px-4 py-2.5">
            <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
          </div>

          {/* You Pay */}
          <div className="flex items-center justify-between px-4 py-2.5">
            <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
          Choose Wallet
        </p>
        <div className="flex flex-col gap-2">
          {/* Phantom */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Solflare */}
          <div className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 animate-pulse rounded-lg bg-gray-200" />
              <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
            </div>
            <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
          </div>
        </div>

        {/* Pay button */}
        <div className="h-12 w-full mt-3 animate-pulse rounded-xl bg-gray-200" />

        {/* Footer */}
        <div className="flex justify-center mt-3 pb-2">
          <div className="h-3 w-48 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </>
  );
}
