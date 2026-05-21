import formatPrice from "@/utils/formatPrice";
import { Clock } from "lucide-react";

export default function OrderDetailsCard({
  packDetails = {},
  perMonthPrice,
  originalPrice,
  discountAmount,
  subTotalPrice,
  duration,
  isYearly,
}) {
  const { package_name, pricing } = packDetails || {};

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200">
      {/* Blue header */}
      <div className="bg-[#1a3fcb] px-4 py-3">
        <p className="text-[10px] font-semibold tracking-widest text-blue-300 uppercase mb-1">
          Order Details
        </p>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-white font-semibold text-base leading-tight">
              {package_name}
            </p>
            <div className="flex items-center gap-1 mt-1.5">
              <span className="inline-flex items-center gap-1 bg-blue-700/60 text-blue-200 text-[11px] px-2 py-0.5 rounded-full">
                <Clock size={10} /> {duration}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-white font-bold text-lg">
              €{formatPrice(subTotalPrice)}
              <span className="text-xs">
                {pricing?.duration >= 12 ? "/yr" : "/mo"}
              </span>
            </p>
            <p className="text-blue-300 text-xs">
              €{formatPrice(perMonthPrice)}/mo
            </p>
          </div>
        </div>
      </div>

      {/* White body */}
      <div className="bg-white px-4 py-3 space-y-3">
        {/* original price */}
        {isYearly && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Original price</span>
            <span className="text-gray-400 line-through">
              €{formatPrice(originalPrice)}
              {isYearly ? "/yr" : "/mo"}
            </span>
          </div>
        )}

        {/* Discount row */}
        {isYearly && (
          <div className="flex justify-between text-sm">
            <span className="text-emerald-600 font-medium">You save (30%)</span>
            <span className="text-emerald-600 font-medium">
              -€{formatPrice(discountAmount)}
            </span>
          </div>
        )}

        {/* Duration line */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">{duration}</span>
          <span className="text-gray-700">
            €{formatPrice(perMonthPrice)}/mo
          </span>
        </div>

        {/* Total */}
        <div className="flex justify-between text-sm font-medium border-t border-gray-100 pt-2">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">€{formatPrice(subTotalPrice)}</span>
        </div>

        {/* You pay */}
        <div className="bg-gray-50 rounded-lg px-3 py-2.5 flex items-center justify-between">
          <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
            You Pay
          </p>
          <p className="text-lg font-bold text-[#ed8716] tracking-tight">
            8,829.6458{" "}
            <span className="text-xs font-medium tracking-wide">SPUMP</span>
          </p>
        </div>

        {/* No wallet connected */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <div className="w-3.5 h-3.5 rounded-sm border border-gray-300 shrink-0" />
          No wallet connected
        </div>
      </div>
    </div>
  );
}
