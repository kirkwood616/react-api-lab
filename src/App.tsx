import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MoviePage from "./components/MoviePage";
import WatchList from "./components/WatchList";
import MovieInterface from "./models/MovieInterface";
import { WatchListGroup, handleWatchListGroup } from "./models/WatchListGroup";
import { useState } from "react";

function App() {
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
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
