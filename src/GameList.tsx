import { useEffect, useState } from "react";
import "./game.css";
import platformsArr from "./platforms";
import IconList from "./IconList";

export interface Platform {
  platform: { name: string };
}
export interface Genre {
  name: string;
  id: number;
  backgroundImage: string;
}
export interface Game {
  id: number;
  name: string;
  added: number;
  metacritic: number;
  rating: number;
  released: string;
  platforms: Platform[];
  genres: Genre[];
  background_image: string;
  short_screenshots: { image: string }[];
}
export interface GameListMode {
  gamesList: Game[];
  mode: boolean;
  onlyGame: (el: Game) => void;
  platChecking: (platf: string, el: Game) => boolean;
}

const GameList = ({
  gamesList,
  mode,
  onlyGame,
  platChecking,
}: GameListMode) => {
  let modeClass: string;
  if (mode) {
    modeClass = "gamesColorGrey";
  } else {
    modeClass = "gamesColorWhite";
  }
  const gamesClass = "mb-3 games " + modeClass;

  return (
    <div className="mb-3 d-flex flex-row GamesContainer">
      {gamesList.map((el: Game) => (
        <div key={gamesList.indexOf(el)} className={gamesClass}>
          <div>
            <img src={el.background_image} />
          </div>
          <IconList platChecking={platChecking} game={el} />
          <button onClick={() => onlyGame(el)}>
            <h4 className="gameName">{el.name}</h4>
          </button>
        </div>
      ))}
    </div>
  );
};

export default GameList;

/*

*/
