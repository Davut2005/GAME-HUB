import { IoLogoWindows } from "react-icons/io";
import { RiPlaystationFill } from "react-icons/ri";
import { DiLinux } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { SiXbox } from "react-icons/si";
import { Game } from "./GameList";

interface Platforms {
  platChecking: (platf: string, el: Game) => boolean;
  game: Game;
}

const IconList = ({ platChecking, game }: Platforms) => {
  return (
    <div className="d-flex flex-row justify-content-between topofGameName">
      <div className="d-flex flex-row gamePlatformIcon">
        {platChecking("PC", game) ? (
          <IoLogoWindows className="logo" size={17} />
        ) : null}
        {platChecking("Playstation 5", game) ? (
          <RiPlaystationFill className="logo" size={17} />
        ) : null}
        {platChecking("Linux", game) ? (
          <DiLinux className="logo" size={17} />
        ) : null}
        {platChecking("IOS", game) ? (
          <FaApple className="logo" size={17} />
        ) : null}
        {platChecking("Android", game) ? (
          <FaAndroid className="logo" size={17} />
        ) : null}
        {platChecking("Nintendo Switch", game) ? (
          <SiNintendoswitch className="logo" size={17} />
        ) : null}
        {platChecking("XBOX", game) ? (
          <SiXbox className="logo" size={17} />
        ) : null}
      </div>
      <div className="d-flex justify-content-center metacritic">
        <p className="p-2">{game.metacritic}</p>
      </div>
    </div>
  );
};

export default IconList;
