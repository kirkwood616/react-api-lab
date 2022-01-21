// import "./Main.css";
import { useEffect, useState } from "react";
import MovieInterface from "../models/MovieInterface";
import { fetchPopular, fetchSearch } from "../services/MovieDbApiService";
import Results from "./Results";
import Search from "./Search";

function Main() {
  // STATES FOR MOVIES & SEARCH TERMS
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [search, setSearch] = useState<string>("");

  // API HOOK FOR POPULAR RESULTS
  useEffect(() => {
    if (search) {
      fetchSearch(search).then((data) => setMovies(data));
      console.log(search + " HEY");
    } else {
      fetchPopular().then((data) => setMovies(data));
      console.log(`${search} + SEARCH`);
    }
  }, [search]);

  // RENDER PAGE
  return (
    <div className="Main">
      <h1>Main</h1>
      <Search onSubmit={setSearch} />
      <Results movies={movies} />
    </div>
  );
}

export default Main;
