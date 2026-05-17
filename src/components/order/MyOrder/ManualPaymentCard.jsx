import { ArrowUpRight, FileText } from "lucide-react";
import InfoRow from "./InfoRow";

export default function ManualPaymentCard({ payment }) {
  return (
    <div className="mt-3 rounded-xl p-4" style={{ background: "#f8fafc" }}>
      <p className="mb-3 font-montserrat text-xs font-bold uppercase tracking-widest text-[#186BB5]">
        Manual Payment Details
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
        <InfoRow icon={User} label="Account Holder" value={payment.name} />
        <InfoRow icon={Building2} label="Bank" value={payment.bank_name} />
        <InfoRow icon={Hash} label="Account No." value={payment.account_no} />
        <InfoRow
          icon={Hash}
          label="Transaction ID"
          value={payment.transaction_id}
        />
        <InfoRow icon={Phone} label="Phone" value={payment.phone} />
        <InfoRow
          icon={Banknote}
          label="Amount"
          value={`${payment.currency} ${payment.amount}`}
        />
        <InfoRow
          icon={Calendar}
          label="Payment Date"
          value={formatDate(payment.payment_at)}
        />
        <InfoRow icon={Building2} label="Branch" value={payment.branch} />
      </div>
      {payment.document && (
        <a
          href={`${ECOM_BASE_URL}${payment.document}`}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 font-montserrat text-xs font-semibold text-[#186BB5] transition-opacity hover:opacity-70">
          <FileText size={13} />
          View Payment Document
          <ArrowUpRight size={12} />
        </a>
      )}
    </div>
  );
}
