import { useState } from "react";
import Movie from "./Movie";
// import "./WatchList.css";

interface Props {}

export function WatchList({}: Props) {
  return (
    <div className="WatchList">
      <h1>Your Watch List</h1>
      <div className="watchListContainer">
        <p>!!Ternary Display Here!!</p>
      </div>
    </div>
  );
}

export default WatchList;
