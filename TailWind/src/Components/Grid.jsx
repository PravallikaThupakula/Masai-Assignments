export default function Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1,2,3,4,5,6].map(i => (
        <div key={i} className="bg-white p-4 rounded shadow">
          Card {i}
        </div>
      ))}
    </div>
  );
}
