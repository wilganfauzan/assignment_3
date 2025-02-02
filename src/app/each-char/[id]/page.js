import { DeleteButton } from "@/app/_constants/delete-button";

export default async function Page({ params }) {

const { id } = await params;
const res = await fetch(`https://v1.appbackend.io/v1/rows/rGvqwxd1r83O/${id}`);
const data = await res.json();

 return (
    <div>
      <div className="grid grid-cols-5 border items-center">
        <div className="border-r p-2 font-bold">Name</div>
        <div className="border-r p-2 font-bold">Race</div>
        <div className="border-r p-2 font-bold">Weapon</div>
        <div className="border-r p-2 font-bold">Job</div>
      </div>
      <div className="grid grid-cols-5 border items-center">
        <div className="border-r p-2">{data.name}</div>
        <div className="border-r p-2">{data.race}</div>
        <div className="border-r p-2">{data.weapon}</div>
        <div className="border-r p-2">{data.job}</div>
        <div className="border-r p-2">
        <DeleteButton characterId={data._id} />
        </div>
      </div>
    </div>
  );
}