export default function Card() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 w-64">
      <img src="https://via.placeholder.com/200" className="rounded mb-3" />
      <h3 className="font-bold text-lg">Card Title</h3>
      <p className="text-gray-600 text-sm mb-3">Card description</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Action
      </button>
    </div>
  );
}
