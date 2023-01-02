export default function Newtable() {
  return (
    <div>
      <table className="table-auto mt-2 text-xs font-medium ml-8 ">
        <tbody className="">
          <tr className="border">
            <th className="border border-current">Id</th>
            <th className="border border-current ">Registration Number</th>
            <th className="border border-current ">Name</th>
            <th className="border border-current "></th>
            <th className="border border-current "></th>
            <th className="border border-current "></th>
          </tr>
        </tbody>
        <tbody className="h-8">
          <tr className="border">
            <td className="w-10 border border-current"></td>
            <td className="border border-current w-32"></td>
            <td className="border border-current w-32"></td>
            <td className="border border-current w-24"></td>
            <td className="border border-current w-24"></td>
            <td className="border border-current w-32">
              <div className="flex items-center p-1">
                <button className="py-1 px-5 bg-blue-400 text-white rounded-xl">
                  View
                </button>
                <button className="py-1 px-5 bg-orange-400 text-white rounded-xl ml-2">
                  Download
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
