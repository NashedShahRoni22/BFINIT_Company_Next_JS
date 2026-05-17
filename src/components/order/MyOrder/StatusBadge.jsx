export default function StatusBadge({ status }) {
  const map = {
    pending: { icon: Clock, color: "#f59e0b", bg: "#fef3c7", label: "Pending" },
    approved: {
      icon: CheckCircle,
      color: "#10b981",
      bg: "#d1fae5",
      label: "Approved",
    },
    active: {
      icon: CheckCircle,
      color: "#186BB5",
      bg: "#dbeafe",
      label: "Active",
    },
    rejected: {
      icon: XCircle,
      color: "#ef4444",
      bg: "#fee2e2",
      label: "Rejected",
    },
    cancelled: {
      icon: XCircle,
      color: "#6b7280",
      bg: "#f3f4f6",
      label: "Cancelled",
    },
  };
  const cfg = map[status?.toLowerCase()] || {
    icon: AlertCircle,
    color: "#6b7280",
    bg: "#f3f4f6",
    label: status,
  };
  const Icon = cfg.icon;
  return (
    <span
      style={{ background: cfg.bg, color: cfg.color }}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-montserrat text-xs font-semibold tracking-wide">
      <Icon size={12} strokeWidth={2.5} />
      {cfg.label}
    </span>
  );
}
