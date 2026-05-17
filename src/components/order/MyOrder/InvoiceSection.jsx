import { ChevronDown, ChevronUp, CreditCard } from "lucide-react";
import InfoRow from "./InfoRow";
import ManualPaymentCard from "./ManualPaymentCard";
import StatusBadge from "./StatusBadge";

export default function InvoiceSection({ invoices }) {
  const [open, setOpen] = useState(false);
  if (!invoices?.length) return null;
  const inv = invoices[0];
  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 font-montserrat text-sm font-semibold text-gray-600 transition-colors hover:text-[#186BB5]">
        <CreditCard size={15} strokeWidth={2} />
        Invoice #{inv.invoice_number}
        <StatusBadge status={inv.status} />
        <span className="ml-auto text-gray-400">
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </span>
      </button>
      {open && (
        <div className="animate-fade-in mt-3">
          <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
            <InfoRow
              icon={CreditCard}
              label="Payment Method"
              value={inv.payment_method?.replace("_", " ")}
            />
            <InfoRow
              icon={Banknote}
              label="Amount"
              value={`EUR ${inv.payment_amount}`}
            />
            <InfoRow
              icon={FileText}
              label="Invoice Type"
              value={inv.invoice_type}
            />
          </div>
          {inv.manualPayments?.map((mp) => (
            <ManualPaymentCard key={mp.id} payment={mp} />
          ))}
        </div>
      )}
    </div>
  );
}
