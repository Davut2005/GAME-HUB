import React from "react";
import { Game } from "./GameList";
import IconList from "./IconList";

interface OnlyGame {
  game: Game;
  platChecking: (platf: string, el: Game) => boolean;
}

const OnlyGame = ({ game, platChecking }: OnlyGame) => {
  const date = new Date(game.released).toString();
  return (
    <div className="onlyGameContainer d-flex flex-row justify-content-between">
      <div className="onlyGameInfo">
        <div className="d-flex flex-row">
          <div className="date d-flex flex-row justify-content-center">
            <p>
              {date.substring(date.indexOf(" ") + 1, date.indexOf(":") - 3)}
            </p>
          </div>
          <IconList platChecking={platChecking} game={game} />
        </div>
        <h1 className="display-3">{game.name}</h1>
      </div>
      <div className="onlyGameImage">
        <div>
          <img src={game.background_image} />
        </div>
        <div>
          <img src={game.short_screenshots[1].image} />
        </div>
        <div>
          <img src={game.short_screenshots[2].image} />
        </div>
      </div>
    </div>
  );
};

export default OnlyGame;
