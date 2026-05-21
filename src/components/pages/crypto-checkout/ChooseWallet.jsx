import { ChevronRight, ShieldCheck, Wallet } from "lucide-react";

const wallets = [
  { name: "Phantom", letter: "P", color: "bg-purple-100 text-purple-700" },
  { name: "Solflare", letter: "S", color: "bg-orange-100 text-orange-700" },
];

export default function ChooseWallet() {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-2">
        Choose Wallet
      </p>
      <div className="flex flex-col gap-2">
        {wallets.map(({ name, letter, color }) => (
          <button
            key={name}
            className="flex items-center cursor-pointer justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-gray-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${color}`}
              >
                {letter}
              </div>
              <span className="text-sm font-medium text-gray-800">{name}</span>
            </div>
            <ChevronRight
              size={16}
              className="text-gray-400 group-hover:text-gray-600 transition-colors"
            />
          </button>
        ))}
      </div>

      <div className="w-full mt-4 flex items-center justify-center gap-2 text-gray-400 rounded-xl py-3 text-sm font-medium">
        <Wallet size={16} />
        Connect a wallet
      </div>

      <div className="text-center space-y-2 mt-2 pb-2">
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
          <ShieldCheck size={12} />
          Secure checkout · Cancel anytime · Powered by BFinit
        </p>
      </div>
    </div>
  );
}
