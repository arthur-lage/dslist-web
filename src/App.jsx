import { useEffect, useState } from "react";
import { api } from "./services/api";

import "./App.css";

export function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const res = await api.get("/games");
      setGames(res.data);
    }

    fetchGames();
  }, []);

  return (
    <>
      <h2>DS List</h2>

      <div>
        <div className="game-list">
          {games.length ? (
            <>
              {games.map((game) => (
                <div key={game.id} className="game">
                  <img src={game.imgUrl} alt={game.title} />
                  <span>{game.title}</span>
                </div>
              ))}
            </>
          ) : (
            <h2>Could not find games.</h2>
          )}
        </div>
      </div>
    </>
  );
}
