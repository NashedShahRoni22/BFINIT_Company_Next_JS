import { skeletonFormFields } from "@/data/constants/skeletonFormFields";
import Container from "../shared/Container";

export default function CheckoutSkeleton() {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row gap-8 py-16 w-full">
        {/* Left side */}
        <div className="w-full">
          {/* Title */}
          <div className="h-7 w-40 bg-gray-200 rounded animate-pulse mb-6" />

          {/* Info banner */}
          <div className="flex gap-3 p-4 bg-gray-100 rounded-lg mb-6 animate-pulse">
            <div className="h-5 w-5 bg-gray-200 rounded-full shrink-0 mt-0.5" />
            <div className="flex-1 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-3/4" />
            </div>
          </div>

          {/* Form fields */}
          {skeletonFormFields.map((field, i) => (
            <div key={i} className="mb-5">
              <div className="flex gap-1 mb-1.5">
                <div
                  className="h-3.5 bg-gray-200 rounded animate-pulse"
                  style={{ width: `${field.label * 4}px` }}
                />
                <div className="h-3.5 w-2 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-11 w-full bg-gray-100 border border-gray-200 rounded-lg animate-pulse" />
              {field.sub && (
                <div className="h-3 w-56 bg-gray-100 rounded animate-pulse mt-1.5" />
              )}
            </div>
          ))}

          {/* Payment Date & Time */}
          <div className="mb-5">
            <div className="flex gap-1 mb-1.5">
              <div className="h-3.5 w-40 bg-gray-200 rounded animate-pulse" />
              <div className="h-3.5 w-2 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-11 w-full bg-gray-100 border border-gray-200 rounded-lg animate-pulse" />
          </div>

          {/* Payment Slip Upload */}
          <div className="mb-6">
            <div className="flex gap-1 mb-1.5">
              <div className="h-3.5 w-28 bg-gray-200 rounded animate-pulse" />
              <div className="h-3.5 w-2 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-3 w-64 bg-gray-100 rounded animate-pulse mb-3" />
            <div className="h-28 w-full bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg animate-pulse flex flex-col items-center justify-center gap-2">
              <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-200 rounded animate-pulse shrink-0" />
            <div className="h-3 w-52 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            {/* Order header */}
            <div className="bg-[#186BB5] p-5">
              <div className="h-3 w-24 bg-[#186BB5] rounded animate-pulse mb-3" />
              <div className="flex items-center justify-between">
                <div className="h-6 w-32 bg-[#186BB5] rounded animate-pulse" />
                <div className="h-7 w-16 bg-[#186BB5] rounded animate-pulse" />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-5 w-20 bg-[#186BB5] rounded-full animate-pulse" />
                <div className="h-3 w-20 bg-[#186BB5] rounded animate-pulse" />
              </div>
            </div>

            <div className="p-5 space-y-6">
              {/* Currency */}
              <div>
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-3" />
                <div className="flex gap-2 flex-wrap">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-9 w-20 bg-gray-100 border border-gray-200 rounded-lg animate-pulse"
                    />
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <div className="h-3 w-28 bg-gray-200 rounded animate-pulse mb-3" />
                <div className="flex gap-3">
                  <div className="flex-1 h-11 bg-blue-50 border-2 border-blue-400 rounded-lg animate-pulse" />
                  <div className="flex-1 h-11 bg-gray-100 border border-gray-200 rounded-lg animate-pulse" />
                </div>
              </div>

              {/* Bank Transfer Details */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                <div>
                  <div className="h-3 w-36 bg-gray-200 rounded animate-pulse mb-1" />
                  <div className="h-2.5 w-56 bg-gray-100 rounded animate-pulse" />
                </div>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 w-24 bg-gray-200 rounded animate-pulse mb-1" />
                      <div className="h-4 w-32 bg-gray-300 rounded animate-pulse" />
                    </div>
                    <div className="h-5 w-5 bg-gray-200 rounded animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div>
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-3" />
                <div className="flex items-center justify-between mb-3">
                  <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                  <div className="h-4 w-10 bg-gray-300 rounded animate-pulse" />
                  <div className="h-6 w-16 bg-blue-200 rounded animate-pulse" />
                </div>
              </div>

              {/* Place Order Button */}
              <div className="h-12 w-full bg-blue-200 rounded-lg animate-pulse" />

              {/* Footer */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-3 w-3 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-48 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
