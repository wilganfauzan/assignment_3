import { DeleteButton } from "../_constants/delete-button";

export const Datalist = async () => {
    const res = await fetch("https://v1.appbackend.io/v1/rows/rGvqwxd1r83O");
    const { data } = await res.json();

    return (
        <div className="space-y-2">
            <h3 className="text-2xl font-bold">Your Characters</h3>
            <div className="grid grid-cols-5 border-b font-bold bg-gray-200 p-2">
                <div className="border-r p-2">Name</div>
                <div className="border-r p-2">Race</div>
                <div className="border-r p-2">Weapon</div>
                <div className="border-r p-2">Job</div>
                <div className="border-r p-2">Action</div>
            </div>
            <div>
                {data.map((item) => {
                    return (
                        <div key={item._id} className="grid grid-cols-5 border items-center">
                            <div className="border-r p-2">{item.name}</div>
                            <div className="border-r p-2">{item.race}</div>
                            <div className="border-r p-2">{item.weapon}</div>
                            <div className="border-r p-2">{item.job}</div>
                            <div className="border-r p-2">
                                <DeleteButton characterId={item._id} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
