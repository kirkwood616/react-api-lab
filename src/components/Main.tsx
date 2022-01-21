// import "./Main.css";
import { useEffect, useState } from "react";
import MovieInterface from "../models/MovieInterface";
import { fetchPopular } from "../services/MovieDbApiService";
import Results from "./Results";
import Search from "./Search";

function Main() {
  // STATES FOR MOVIES & SEARCH TERMS
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [search, setSearch] = useState<string>("");

  // API HOOK FOR POPULAR RESULTS
  useEffect(() => {
    fetchPopular().then((data) => setMovies(data));
  }, []);

  // RENDER PAGE
  return (
    <div className="Main">
      <h1>Main</h1>
      <Search />
      <Results movies={movies} />
    </div>
  );
}

export default Main;
