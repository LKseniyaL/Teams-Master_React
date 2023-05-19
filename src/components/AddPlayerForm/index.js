import React from "react";
import s from "./style.module.css";
import Select from "react-select";
import { Context } from "../../context";
import { useContext } from "react";

export default function AddPlayerForm() {
  const { teams, add_players } = useContext(Context);

  const submit = (e) => {
    e.preventDefault();

    const player_obj = {
      id: Date.now(),
      player: e.target.player.value,
      team: e.target.team.value,
    };
    add_players(player_obj);
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className={s.add_player_form}>
      <label>
        <h3>Add player</h3>
        <input type="text" name="player" placeholder="Player" />
      </label>
      <Select options={teams} name="team" />
      <button>Add player</button>
    </form>
  );
}
