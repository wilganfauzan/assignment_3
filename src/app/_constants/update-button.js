"use client";

import { updateCharacterAction } from "../_actions/action-update";

export function UpdateButton({ characterId }) {
    async function handleUpdate() {
        await updateCharacterAction(characterId);
    }

    return (
        <button onClick={handleUpdate} className="bg-orange-500 hover:bg-orange-600">
            Update
        </button>
    );
}
