import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import WatchList from "./components/WatchList";
import MovieInterface from "./models/MovieInterface";

function App() {
  const [watchList, setWatchList] = useState<MovieInterface[]>([]);

  function handleWatchList(movie: MovieInterface): void {
    let index: number = watchList.findIndex((e) => e.id === movie.id);

    if (watchList.length && index + 1) {
      setWatchList((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    } else {
      setWatchList((prev) => [...watchList, movie]);
    }
  }
  console.log(watchList);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
