"use server";

import { revalidatePath } from "next/cache";

export async function updateCharacterAction(formData) {
  const name = formData.get("name");
  const id = formData.get("id");
  const weapon = formData.get("weapon");
  const job = formData.get("job");

  await fetch("https://v1.appbackend.io/v1/rows/rGvqwxd1r83O", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      name,
      weapon,
      job,
    }),
  });

  revalidatePath(`/app/${id}`);
}
