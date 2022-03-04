import { createContext } from "react";
import MovieInterface from "../models/MovieInterface";

interface ContextModel {
  watchList: MovieInterface[];
  handleWatchList: (movie: MovieInterface) => void;
}

const defaultValue: ContextModel = {
  watchList: [],
  handleWatchList: () => {},
};

const AppContext = createContext(defaultValue);
export default AppContext;
