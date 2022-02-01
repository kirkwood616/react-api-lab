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
