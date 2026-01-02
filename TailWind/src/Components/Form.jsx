export default function Form() {
  return (
    <form className="bg-white p-6 rounded shadow w-80 space-y-4">
      <input className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400" placeholder="Name" />
      <input className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400" placeholder="Email" />
      <input type="password" className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400" placeholder="Password" />
      <button className="bg-blue-500 text-white py-2 rounded w-full hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}
