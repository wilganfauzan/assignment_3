"use server";

import { revalidatePath } from "next/cache";

export async function deleteCharacterAction(id) {
    if (!id) {
        throw new Error("Character ID is required");
    }

    const response = await fetch("https://v1.appbackend.io/v1/rows/rGvqwxd1r83O/", {
 method: "DELETE",
      headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify([id])
});

    if (!response.ok) {
        throw new Error("Failed to delete character");
    }

    revalidatePath("/");
}
