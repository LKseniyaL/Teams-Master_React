import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/index";
import ConfiguretionsPage from "../../pages/ConfiguretionsPage";
import TeamsPage from "../../pages/TeamsPage";
import { useState } from "react";
import { Context } from "../../context";

function App() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

  const add_players = (value) => setPlayers([...players, value]);

  const add_team = (value) =>
    setTeams([
      ...teams,
      {
        label: value,
        value,
      },
    ]);

  const player_delete = (value) =>
    setPlayers((prev) => prev.filter(({ id }) => id !== value));

  return (
    <div>
      <Context.Provider
        value={{ teams, add_team, players, add_players, player_delete }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ConfiguretionsPage />} />
            <Route path="/teams_page" element={<TeamsPage />} />
          </Route>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
