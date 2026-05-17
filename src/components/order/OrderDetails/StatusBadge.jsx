export default function StatusBadge({ status }) {
  const styles = {
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    active: "bg-emerald-100 text-emerald-800 border-emerald-200",
    cancelled: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border capitalize ${
        styles[status] ?? "bg-muted text-muted-foreground"
      }`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
