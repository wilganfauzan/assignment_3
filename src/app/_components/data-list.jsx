import Link from "next/link";
import { DeleteButton } from "../_constants/delete-button";

export const Datalist = async () => {
  const res = await fetch("https://v1.appbackend.io/v1/rows/rGvqwxd1r83O");
  const { data } = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-zinc-400 rounded-xl shadow-lg">
      <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Your Characters
      </h3>
      <div className="grid grid-cols-5 bg-gray-300 text-gray-900 font-semibold p-3 rounded-t-lg">
        <div className="text-center">Name</div>
        <div className="text-center">Race</div>
        <div className="text-center">Weapon</div>
        <div className="text-center">Job</div>
        <div className="text-center">Actions</div>
      </div>
      <div className="divide-y divide-gray-300 bg-gray-100 rounded-b-lg">
        {data.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-5 items-center p-3 hover:bg-gray-200 transition-all"
          >
            <div className="text-center font-medium">{item.name}</div>
            <div className="text-center">{item.race}</div>
            <div className="text-center">{item.weapon}</div>
            <div className="text-center">{item.job}</div>
            <div className="justify-center space-x-3">
              <Link href={`/each-char/${item._id}`}>
                <button className="bg-indigo-500 text-white px-7 py-1 mb-2 rounded-lg shadow hover:bg-indigo-600 transition">
                  Edit
                </button>
              </Link>
              <DeleteButton characterId={item._id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
