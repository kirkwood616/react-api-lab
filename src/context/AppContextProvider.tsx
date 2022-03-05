import { ReactNode, useState } from "react";
import MovieInterface from "../models/MovieInterface";
import AppContext from "./AppContext";

interface Props {
  children: ReactNode;
}

export default function AppContextProvider({ children }: Props) {
  const [watchList, setWatchList] = useState<MovieInterface[]>([]);

  function handleWatchList(movie: MovieInterface): void {
    let index: number = watchList.findIndex((e) => e.id === movie.id);

    if (watchList.length && index + 1) {
      setWatchList((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    } else {
      setWatchList((prev) => [...watchList, movie]);
    }
  }

  return <AppContext.Provider value={{ watchList, handleWatchList }}>{children}</AppContext.Provider>;
}
