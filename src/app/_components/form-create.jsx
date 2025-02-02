"use client";

import { useActionState } from "react";
import { createCharacterAction } from "../_actions/action-create";

export const FormCreate = () => {
    const [sate, formAction, pending] = useActionState(createCharacterAction, null)
    
  return (
    <form className="space-y-2" action={formAction}>
        <section>
            <h3 className="text-4xl font-bold"> Create your character</h3>
        </section>
        <p className="font-bold">Input your character name</p>
        <input name="name" placeholder="Input your character name"/>
        <p className="font-bold">Choose your race</p>
        <select name="race">
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="dwarf">dwarf</option>
            <option value="orc">orc</option>
            <option value="undead">undead</option>
        </select>
        <p className="font-bold">Choose your main weapon</p>
        <select name="weapon">
            <option value="sword">Sword</option>
            <option value="longSword">Long Sword</option>
            <option value="bow">Bow</option>
            <option value="axe">Axe</option>
            <option value="spear">Spear</option>
            <option value="staff">Staff</option>
            <option value="dagger">Dagger</option>
            <option value="mace">Mace</option>
        </select>
        <p className="font-bold">Choose your job</p>
        <select name="job">
            <option value="knight">Knight</option>
            <option value="paladin">Paladin</option>
            <option value="assassin">Assassin</option>
            <option value="priest">Priest</option>
            <option value="necromancer">Necromancer</option>
            <option value="mage">Mage</option>
            <option value="ranger">Ranger</option>
            <option value="berserker">Berserker</option>
        </select>
        <button disabled={pending}>{pending ? "Creating...." : "Create"}</button>
        </form>
  );
};
