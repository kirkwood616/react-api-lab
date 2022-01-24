import { useState } from "react";
import { WatchListGroup, handleWatchListGroup } from "../models/WatchListGroup";
import Movie from "./Movie";
import MovieInterface from "../models/MovieInterface";
// import "./WatchList.css";

interface Props {}

export function WatchList({}: Props) {
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
    <div className="WatchList">
      <h1>Your Watch List</h1>
      <div className="watchListContainer">
        <p>!!Ternary Display Here!!</p>
        {watchList.map((movie, i) => (
          <Movie key={i} movie={movie} onAdd={() => handleWatchList(movie)} />
        ))}
      </div>
    </div>
  );
}

export default WatchList;
