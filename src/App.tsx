import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MoviePage from "./components/MoviePage";
import WatchList from "./components/WatchList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/react-api-lab" element={<Main />} />
          {/* <Route path="/watchlist" element={<WatchList />} /> */}
          <Route path="/react-api-lab/watchlist" element={<WatchList />} />
          {/* <Route path="/movie/:id" element={<MoviePage />} /> */}
          <Route path="/react-api-lab/movie/:id" element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
