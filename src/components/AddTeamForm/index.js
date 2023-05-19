import React, { useContext } from "react";
import s from "./style.module.css";
import { Context } from "../../context";

export default function AddTeamForm() {
  const { add_team } = useContext(Context);

  const submit = (e) => {
    e.preventDefault();
    add_team(e.target.title.value);
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className={s.add_team_form}>
      <label>
        <h3>Add team</h3>
        <input type="text" name="title" placeholder="Team" />
      </label>
      <button>Add team</button>
    </form>
  );
}
