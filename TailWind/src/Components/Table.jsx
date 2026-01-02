export default function Table() {
  return (
    <table className="border w-full">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Age</th>
          <th className="border p-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {["A", "B", "C", "D"].map((n, i) => (
          <tr key={i} className="odd:bg-white even:bg-gray-100 hover:bg-gray-200">
            <td className="border p-2">{n}</td>
            <td className="border p-2">{20 + i}</td>
            <td className="border p-2">Role</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
