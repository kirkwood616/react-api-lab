import { useState } from "react";
// import "./WatchList.css";

interface Props {}

export function WatchList({}: Props) {
  const [watchList, setWatchList] = useState([]);

  function addToWatchList() {
    //
  }
  return (
    <div className="WatchList">
      <h1>WatchList</h1>
    </div>
  );
}

export default WatchList;
