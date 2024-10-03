import axios from "axios";
import { Game } from "../GameList";
const urlGames = "https://api.rawg.io/api/games?";
const key = "key=" + "5dd11337b4d348bf86f36a8bf24ba0cc";

class Getting {
    getGames () {return axios.get<Game[]>(urlGames + key)};
}

export default new Getting();