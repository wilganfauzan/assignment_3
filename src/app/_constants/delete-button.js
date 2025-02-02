"use client";

import { deleteCharacterAction } from "../_actions/action-delete";

export function DeleteButton({ characterId }) {
    async function handleDelete() {
        await deleteCharacterAction(characterId);
    }

    return (
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
            Delete
        </button>
    );
}
