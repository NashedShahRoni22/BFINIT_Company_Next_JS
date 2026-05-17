import { ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";

export default function PackageFeatures({ features }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? features : features.slice(0, 5);
  return (
    <div className="mt-3">
      <p className="mb-2 font-montserrat text-xs font-bold uppercase tracking-widest text-gray-400">
        Included Features
      </p>
      <ul className="space-y-1">
        {visible.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-2 font-sora text-sm text-gray-600">
            <ShieldCheck
              size={13}
              className="shrink-0 text-[#186BB5]"
              strokeWidth={2}
            />
            {f}
          </li>
        ))}
      </ul>
      {features.length > 5 && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-2 flex items-center gap-1 font-montserrat text-xs font-semibold text-[#186BB5] transition-opacity hover:opacity-70">
          {showAll ? (
            <>
              Show less <ChevronUp size={12} />
            </>
          ) : (
            <>
              +{features.length - 5} more features <ChevronDown size={12} />
            </>
          )}
        </button>
      )}
    </div>
  );
}
