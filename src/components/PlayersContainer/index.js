import React, { useContext } from "react";
import { Context } from "../../context";
import PlayerCard from "../PlayerCard";
import s from "./style.module.css";

export default function PlayersContainer() {
  const { players } = useContext(Context);

  return (
    <div>
      {players.length === 0 ? (
        <p className={s.no_players}>No players!</p>
      ) : (
        players.map((item) => <PlayerCard key={item.id} {...item} />)
      )}
    </div>
  );
}
