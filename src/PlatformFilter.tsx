import platformsArr from "./platforms";
import "./game.css";

export interface PLatformSelect {
  selectPlatf: (platf: string) => void;
  mode: boolean;
}

const PlatformFilter = ({ selectPlatf, mode }: PLatformSelect) => {
  let classMode: string;
  if (mode) {
    classMode = "PlatformFilterGrey";
  } else {
    classMode = "platformFilterWhite";
  }
  return (
    <div className="platformFilter">
      <select
        className={classMode}
        onChange={(event) => selectPlatf(event.target.value)}
      >
        <option value="all" key={-1}>
          Platforms
        </option>
        {platformsArr.map((plat) => (
          <option key={platformsArr.indexOf(plat)} value={plat.name}>
            {plat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlatformFilter;
