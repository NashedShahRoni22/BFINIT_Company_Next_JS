export default function InfoRow({ label, children }) {
  return (
    <div className="flex items-center justify-between py-2.5 gap-4">
      <span className="text-xs text-muted-foreground shrink-0">{label}</span>
      <span className="text-sm font-medium text-foreground text-right">
        {children}
      </span>
    </div>
  );
}
