import { useEffect, useState } from "react";
import PlatformFilter from "./PlatformFilter";
import PlatformsList from "./PlatformsList";
import GenresList from "./GenresList";
import NavBar from "./NavBar";
import GameList from "./GameList";
import "./game.css";
import { Game } from "./GameList";
import Getting from "./services/GettingGames";
import { Platform } from "./GameList";
import { FieldValues } from "react-hook-form";
import { Genre } from "./GameList";
import OrderBy from "./OrderBy";
import OnlyGame from "./OnlyGame";

function App() {
  const [title1, setTitle1] = useState("Games");
  const [title, setTitle] = useState("Games");
  const [isOnlyGame, setIsOnlyGame] = useState(false);
  const [gamesList, setGamesArr] = useState<Game[]>([]);
  const [gamesList2, setGamesArr2] = useState<Game[]>([]);
  const [mode, setMode] = useState(true);
  const [onlyGame, setOnlyGame] = useState<Game>(gamesList2[0]);

  useEffect(() => {
    Getting.getGames().then((res) => {
      Object.values(res.data)[3].map((el: Game) => {
        const games2 = gamesList;
        games2.push(el);
        setGamesArr(games2);
        setGamesArr2(games2);
      });
      setGamesArr(gamesList.slice(0, gamesList.length / 2));
      setGamesArr2(gamesList.slice(0, gamesList.length / 2));
    });
    console.log(gamesList2);
  }, []);

  const changeOnlyGame = () => {
    if (isOnlyGame) {
      setIsOnlyGame(false);
    }
  };

  const platChecking = (platf: string, el: Game) => {
    const gamePlArr = el.platforms.map(
      (el: Platform) => el.platform.name.toLowerCase().split(" ")[0]
    );
    const pl = platf.toLowerCase().split(" ")[0];
    const filter = gamePlArr.includes(pl);
    let filter1 = false;
    if (pl === "ps" && gamePlArr.includes("playstation")) {
      filter1 = true;
    } else if (
      (pl === "ios" && gamePlArr.includes("apple")) ||
      (pl === "ios" && gamePlArr.includes("macos"))
    ) {
      filter1 = true;
    }
    if (filter || filter1) {
      return true;
    } else {
      return false;
    }
  };

  const selectGenre = (genre: string) => {
    setTitle(genre);
    setGamesArr(
      gamesList2.filter((el: Game) =>
        el.genres.map((el: Genre) => el.name).includes(genre)
      )
    );
  };

  const platfFilt = (platf: string) => {
    if (platf === "all") {
      setGamesArr(gamesList2);
      setTitle(title1);
    } else {
      setTitle(platf + " " + title1);
      setGamesArr(gamesList2.filter((el: Game) => platChecking(platf, el)));
    }
  };

  const navFilt = (data: FieldValues) => {
    setGamesArr(gamesList2.filter((el: Game) => el.name.startsWith(data.name)));
  };

  const sortBy = (el: string) => {
    if (el === "Relevance") {
      setGamesArr(
        gamesList
          .toSorted((a: Game, b: Game) => a.metacritic - b.metacritic)
          .toReversed()
      );
    }
    if (el === "Name") {
      setGamesArr(
        gamesList.toSorted((a: Game, b: Game) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        )
      );
    }
    if (el === "Release Date") {
      setGamesArr(
        gamesList.toSorted((a: Game, b: Game) =>
          a.released.localeCompare(b.released)
        )
      );
    }
    if (el === "Popularity") {
      setGamesArr(
        gamesList.toSorted((a: Game, b: Game) => a.added - b.added).toReversed()
      );
    }
    if (el === "Average Rating") {
      setGamesArr(
        gamesList
          .toSorted((a: Game, b: Game) => a.rating - b.rating)
          .toReversed()
      );
    }
    console.log(gamesList);
  };

  return (
    <div className={mode ? "bodyBlack" : "bodyWhite"}>
      <NavBar
        changeOnlyGame={() => changeOnlyGame()}
        mode={mode}
        changingMode={() => setMode(!mode)}
        Submitting={navFilt}
      />
      <div className="GenrePlatfGamesContainer d-flex flex-row">
        <div>
          <GenresList SelectGenre={selectGenre} />
          <PlatformsList mode={mode} selectPlatf={platfFilt} />
        </div>
        {!isOnlyGame ? (
          <div className="gamesPart">
            <h1 className="p-2">{title}</h1>
            <div className="d-flex flex-row">
              <PlatformFilter mode={mode} selectPlatf={platfFilt} />
              <OrderBy mode={mode} sorting={sortBy} />
            </div>
            <GameList
              onlyGame={(el) => {
                setOnlyGame(el);
                setIsOnlyGame(true);
              }}
              platChecking={platChecking}
              gamesList={gamesList}
              mode={mode}
            />
          </div>
        ) : (
          // fenovneovnnbo;srn;tbonjkn  eojgjcgn3hc8g8 7yg8y8
          // nrvneovnoetnvbornmsbonsmklvm,avkenlav je jkesngvjn
          <div>
            <OnlyGame platChecking={platChecking} game={onlyGame} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

//

/* 
  
    let gameGTA: Game;
  gameGTA = {
    id: 0,
    name: "Grand Theft Auto 5",
    metacritic: 92,
    added: 20000,
    rating: 4.47,
    released: "2013-09-17",
    background_image:
      "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    short_screenshots: [
      {
        image:
          "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
      },
      {
        image:
          "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
      },
      {
        image:
          "https://oyster.ignimgs.com/mediawiki/apis.ign.com/grand-theft-auto-5/5/59/GTAO_072222.jpg?width=1280",
      },
    ],
    platforms: [
      { platform: { name: "PC" } },
      { platform: { name: "Playstation 5" } },
      { platform: { name: "XBOX" } },
    ],
    genres: [
      {
        name: "Action",
        id: 1,
        backgroundImage:
          "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
      },
    ],
  };

    useEffect(() => {
    setGamesArr([gameGTA]);
    setGamesArr2([gameGTA]);
  }, []);
  */
