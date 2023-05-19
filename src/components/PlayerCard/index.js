import React, { useContext } from "react";
import s from "./style.module.css";
import { Context } from "../../context";

export default function PlayerCard({ id, player, team }) {
  const { player_delete } = useContext(Context);

  return (
    <div className={s.player_card}>
      <p>{player}</p>
      <p>{team}</p>
      <button onClick={() => player_delete(id)} className={s.btn_delete}>
        X
      </button>
    </div>
  );
}
