import formatPrice from "@/utils/formatPrice";
import { RefreshCw, Clock, Tag, Coins } from "lucide-react";

export default function TokenBreakDown({ originalPrice, isYearly }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
        Token Breakdown
      </p>
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="text-gray-400" />
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              Service Price
            </span>
          </div>
          <span className={`text-sm font-semibold text-gray-800`}>
            €{formatPrice(originalPrice)} EUR
          </span>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="text-gray-400" />
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              Renewal Interval
            </span>
          </div>
          <span className={`text-sm font-semibold text-gray-800`}>
            {isYearly ? "Yearly" : "Monthly"}
          </span>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="text-gray-400" />
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              Discount
            </span>
          </div>
          <span className={`text-sm font-semibold text-gray-800`}>
            {isYearly ? "30%" : "0%"}
          </span>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Coins size={14} className="text-gray-400" />
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              Token Rates
            </span>
          </div>
          <span className={`text-sm font-semibold text-gray-800`}>
            $0.002840
          </span>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-2">
            <Coins size={14} className="text-gray-400" />
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              You Pay
            </span>
          </div>
          <span className="text-sm font-semibold text-[#ed8716]">
            8,829.6458{" "}
            <span className=" font-medium tracking-wide text-xs">SPUMP</span>
          </span>
        </div>
      </div>
    </div>
  );
}
