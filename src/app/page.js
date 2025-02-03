import Image from "next/image";
import { FormCreate } from "./_components/form-create";
import { Datalist } from "./_components/data-list";

export default function Home() {
  return (
    <div className="max-w-xl m-auto py-12 space-y-8">
      <FormCreate />
      <Datalist />
    </div>
  );
}
