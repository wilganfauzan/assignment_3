"use server";

import { revalidatePath } from "next/cache";

export async function createCharacterAction(_, formData) 
{
    const name = formData.get("name");
    const race = formData.get("race");
    const weapon = formData.get("weapon");
    const job = formData.get("job");

    await fetch("https://v1.appbackend.io/v1/rows/rGvqwxd1r83O", {
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
         body: JSON.stringify([{name, race, weapon, job}])
});

    revalidatePath("/");
}