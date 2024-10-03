import platformsArr from "./platforms";
import "./game.css";
import { PLatformSelect } from "./PlatformFilter";

const PlatformsList = ({ selectPlatf }: PLatformSelect) => {
  return (
    <div className="p-2">
      <h2>Platforms</h2>
      {platformsArr.map((platf) => (
        <button
          key={platformsArr.indexOf(platf)}
          onClick={() => selectPlatf(platf.name)}
          className="mb-3 d-flex flex-row genreList"
        >
          <div className="imageGenre">
            <img src={platf.icon} />
          </div>
          <div className="d-flex centeredPar">
            <p className="p-2">{platf.name}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PlatformsList;
