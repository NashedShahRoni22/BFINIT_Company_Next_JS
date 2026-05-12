export default function OrderDetailsSkeleton() {
  return (
    <div className="sticky top-20 h-fit overflow-hidden rounded-xl border border-[#D6E4F0] bg-white animate-pulse">
      {/* Header */}
      <div className="bg-[#186BB5] px-5 pb-6 pt-5">
        <div className="mb-3 h-3 w-24 rounded bg-white/20" />

        <div className="flex items-start justify-between gap-3">
          <div className="space-y-3">
            <div className="h-6 w-40 rounded bg-white/20" />
            <div className="flex gap-2">
              <div className="h-6 w-20 rounded-full bg-white/20" />
              <div className="h-6 w-16 rounded-full bg-white/20" />
            </div>
          </div>

          <div className="space-y-2 text-right">
            <div className="ml-auto h-8 w-20 rounded bg-white/20" />
            <div className="ml-auto h-3 w-14 rounded bg-white/20" />
          </div>
        </div>
      </div>

      <div className="space-y-5 px-5 py-5">
        {/* Currency */}
        <div className="space-y-3">
          <div className="h-3 w-20 rounded bg-gray-200" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-10 w-28 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-3">
          <div className="h-3 w-28 rounded bg-gray-200" />
          <div className="grid grid-cols-2 gap-2.5">
            {[1, 2].map((item) => (
              <div key={item} className="h-14 rounded-xl bg-gray-200" />
            ))}
          </div>
        </div>

        {/* Bank Info */}
        <div className="overflow-hidden rounded-xl border border-[#D6E4F0]">
          <div className="border-b border-[#D6E4F0] px-4 py-3">
            <div className="h-3 w-32 rounded bg-gray-200" />
            <div className="mt-2 h-3 w-48 rounded bg-gray-200" />
          </div>

          <div className="space-y-3 px-4 py-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-2 w-20 rounded bg-gray-200" />
                  <div className="h-3 w-32 rounded bg-gray-200" />
                </div>
                <div className="h-8 w-8 rounded-lg bg-gray-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-3">
          <div className="h-3 w-20 rounded bg-gray-200" />

          <div className="rounded-xl border border-[#D6E4F0] bg-[#F4F7FB] p-4 space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="h-3 w-28 rounded bg-gray-200" />
                <div className="h-3 w-16 rounded bg-gray-200" />
              </div>
            ))}

            <div className="flex items-center justify-between pt-2">
              <div className="h-4 w-16 rounded bg-gray-300" />
              <div className="h-6 w-20 rounded bg-gray-300" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="h-12 w-full rounded-xl bg-gray-200" />
      </div>

      {/* Footer */}
      <div className="border-t border-[#D6E4F0] px-5 py-3">
        <div className="mx-auto h-3 w-40 rounded bg-gray-200" />
      </div>
    </div>
  );
}
