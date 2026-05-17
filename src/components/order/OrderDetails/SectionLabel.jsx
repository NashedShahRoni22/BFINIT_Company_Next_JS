export default function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand/10">
        <Icon className="w-3.5 h-3.5 text-brand" />
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
