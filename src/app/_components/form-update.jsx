//"use client";

import { updateCharacterAction } from "../_actions/action-update";

export const UpdateChar = ({ id, name, weapon, job }) => {
  return (
    <section>
      <form className="space-y-2" action={updateCharacterAction}>
        <input name="id" defaultValue={id} hidden />

        <p className="font-bold mt-20">Change your character name</p>
        <input
          name="name"
          placeholder="Change your character name"
          defaultValue={name}
        />

        <p className="font-bold">Change your main weapon</p>
        <select name="weapon" defaultValue={weapon}>
          <option value="sword">Sword</option>
          <option value="longSword">Long Sword</option>
          <option value="bow">Bow</option>
          <option value="axe">Axe</option>
          <option value="spear">Spear</option>
          <option value="staff">Staff</option>
          <option value="dagger">Dagger</option>
          <option value="mace">Mace</option>
        </select>

        <p className="font-bold">Change your job</p>
        <select name="job" defaultValue={job}>
          <option value="knight">Knight</option>
          <option value="paladin">Paladin</option>
          <option value="assassin">Assassin</option>
          <option value="priest">Priest</option>
          <option value="jester">Jester</option>
          <option value="mage">Mage</option>
          <option value="ranger">Ranger</option>
          <option value="berserker">Berserker</option>
        </select>
        <button className="bg-orange-500 px-12 hover:bg-orange-600 rounded-full text-l">
          Update
        </button>
      </form>

      <a
        href="/"
        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
      >
        Back to Home
      </a>
    </section>
  );
};
