// import "./Results.css";
import { useState } from "react";
import MovieInterface from "../models/MovieInterface";
import { WatchListGroup, handleWatchListGroup } from "../models/WatchListGroup";
import Movie from "./Movie";

interface Props {
  movies: MovieInterface[];
}

function Results({ movies }: Props) {
  // WORKAROUND FOR NOT KNOWING CONTEXT YET - DUPLICATE WATCHLIST STATE
  let [watchList, setWatchList] = useState<MovieInterface[]>(WatchListGroup);

  function handleWatchList(movie: MovieInterface) {
    let index: number = watchList.findIndex((e) => e.id === movie.id);

    if (watchList.length && index + 1) {
      setWatchList((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    } else {
      setWatchList((prev) => [...watchList, movie]);
    }
    handleWatchListGroup(movie);
  }

  return (
    <div className="Results">
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} onAdd={() => handleWatchList(movie)} />
      ))}
    </div>
  );
}

export default Results;
