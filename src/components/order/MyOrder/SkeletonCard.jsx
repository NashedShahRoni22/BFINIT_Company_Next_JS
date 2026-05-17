export default function SkeletonCard() {
  return (
    <div
      className="animate-pulse overflow-hidden rounded-2xl"
      style={{ border: "1.5px solid #e8edf2" }}>
      <div className="h-16 bg-[#186BB5]/20" />
      <div className="grid grid-cols-4 gap-4 bg-white px-6 py-4">
        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <div className="mb-2 h-3 w-16 rounded bg-gray-200" />
            <div className="h-5 w-24 rounded bg-gray-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
