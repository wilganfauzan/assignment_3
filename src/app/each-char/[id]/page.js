import { UpdateChar } from "@/app/_components/form-update";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/rGvqwxd1r83O/${id}`
  );
  const data = await res.json();

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-3/5 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-4 border border-b font-bold bg-gray-200 p-2 text-xl text-center">
          <div className="border-r p-2 font-bold">Name</div>
          <div className="border-r p-2 font-bold">Race</div>
          <div className="border-r p-2 font-bold">Weapon</div>
          <div className="border-r p-2 font-bold">Job</div>
        </div>
        <div className="grid grid-cols-4 border text-center">
          <div className="border-r p-2">{data.name}</div>
          <div className="border-r p-2">{data.race}</div>
          <div className="border-r p-2">{data.weapon}</div>
          <div className="border-r p-2">{data.job}</div>
        </div>
        <div className="mt-4">
          <UpdateChar
            id={data._id}
            name={data.name}
            weapon={data.weapon}
            job={data.job}
          />
        </div>
      </div>
    </main>
  );
}
