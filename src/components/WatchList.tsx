import { useContext } from "react";
import Movie from "./Movie";
import AppContext from "../context/AppContext";

export function WatchList() {
  let { watchList } = useContext(AppContext);

  return (
    <div className="WatchList">
      <h1>Your Watch List</h1>
      <div className="watchListContainer">
        {watchList.map((movie, i) => (
          <Movie key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default WatchList;
