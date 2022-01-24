import { useState } from "react";
import { WatchListGroup, handleWatchListGroup } from "../models/WatchListGroup";
import Movie from "./Movie";
import MovieInterface from "../models/MovieInterface";
// import "./WatchList.css";

interface Props {}

export function WatchList({}: Props) {
  let [watchList, setWatchList] = useState(WatchListGroup);

  function handleWatchList(movie: MovieInterface) {
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
