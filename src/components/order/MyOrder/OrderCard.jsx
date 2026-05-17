import Divider from "./Divider";
import InfoRow from "./InfoRow";
import InvoiceSection from "./InvoiceSection";
import PackageFeatures from "./PackageFeatures";

function OrderCard({ order }) {
  const [expanded, setExpanded] = useState(false);
  const pkg = order.package;
  const period = order.subscriptionPeriod;
  const upgrade = order.packageUpgrades?.[0];
  const invoices = [
    {
      invoice: "",
      paymentStatus: "",
      totalAmount: "",
      paymentMethod: "",
    },
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{ border: "1.5px solid #e8edf2" }}>
      {/* Header Strip */}
      {/* <div
        className="flex items-center justify-between gap-4 px-6 py-4"
        style={{ background: "#186BB5" }}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
            <Package size={18} color="white" strokeWidth={2} />
          </div>
          <div>
            <p className="font-montserrat text-base font-bold leading-tight text-white">
              {pkg.package_name}
            </p>
            <p className="mt-0.5 font-sora text-xs text-white/70">
              {pkg.package_type_label} · Order #{order.id}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <StatusBadge status={order.status} />
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25">
            {expanded ? (
              <ChevronUp size={16} color="white" />
            ) : (
              <ChevronDown size={16} color="white" />
            )}
          </button>
        </div>
      </div> */}

      {/* Summary Row */}
      {/* <div className="grid grid-cols-2 gap-4 bg-white px-6 py-4 md:grid-cols-4">
        <div>
          <p className="mb-1 font-montserrat text-xs uppercase tracking-widest text-gray-400">
            Price
          </p>
          <p className="font-montserrat text-lg font-bold text-gray-900">
            EUR {period.price}
            <span className="ml-1 text-xs font-normal text-gray-400">
              / {period.duration}mo
            </span>
          </p>
        </div>
        <div>
          <p className="mb-1 font-montserrat text-xs uppercase tracking-widest text-gray-400">
            Starts
          </p>
          <p className="font-sora text-sm font-semibold text-gray-700">
            {formatDate(order.start_at)}
          </p>
        </div>
        <div>
          <p className="mb-1 font-montserrat text-xs uppercase tracking-widest text-gray-400">
            Expires
          </p>
          <p className="font-sora text-sm font-semibold text-gray-700">
            {formatDate(order.expire_at)}
          </p>
        </div>
        <div>
          <p className="mb-1 font-montserrat text-xs uppercase tracking-widest text-gray-400">
            Max Stores
          </p>
          <p className="flex items-center gap-1.5 font-sora text-sm font-semibold text-gray-700">
            <Layers size={14} className="text-[#186BB5]" />
            {pkg.max_store} Stores
          </p>
        </div>
      </div> */}

      {/* Expanded Detail */}
      {expanded && (
        <div className="bg-white px-6 pb-6">
          <Divider />
          <div className="grid gap-6 pt-2 md:grid-cols-2">
            <div>
              <p className="mb-2 font-montserrat text-xs font-bold uppercase tracking-widest text-[#186BB5]">
                Plan Details
              </p>
              <InfoRow
                icon={Package}
                label="Plan Type"
                value={pkg.package_type}
              />
              <InfoRow
                icon={Layers}
                label="Product Limit"
                value={`${pkg.product_limit?.toLocaleString()} Products`}
              />
              <InfoRow
                icon={Banknote}
                label="Storage"
                value={`${pkg.max_storage} GB`}
              />
              {upgrade && (
                <>
                  <InfoRow
                    icon={Calendar}
                    label="Order Type"
                    value={upgrade.package_order_type}
                  />
                  <InfoRow
                    icon={Banknote}
                    label="Discount"
                    value={`EUR ${upgrade.discount_amount}`}
                  />
                </>
              )}
              <PackageFeatures features={pkg.description} />
            </div>
            <div>
              <p className="mb-2 font-montserrat text-xs font-bold uppercase tracking-widest text-[#186BB5]">
                Payment & Invoice
              </p>
              <InvoiceSection invoices={order.packageInvoices} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
