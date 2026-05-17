export default function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <div className="mt-0.5 text-[#186BB5]">
        <Icon size={15} strokeWidth={2} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-0.5 font-montserrat text-xs uppercase tracking-widest text-gray-400">
          {label}
        </p>
        <p className="truncate font-sora text-sm font-medium text-gray-800">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}
