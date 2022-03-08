import "./WatchList.css";
import { useContext } from "react";
import Movie from "./Movie";
import AppContext from "../context/AppContext";

export function WatchList() {
  let { watchList } = useContext(AppContext);

  return (
    <div className="WatchList">
      <h1>Your Watch List</h1>
      <div className="watchListContainer">
        {watchList.length ? (
          <>
            {watchList.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </>
        ) : (
          <h4>No Movies... Try Adding Some</h4>
        )}
      </div>
    </div>
  );
}

export default WatchList;
