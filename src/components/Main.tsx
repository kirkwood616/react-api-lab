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

  // console.log(movies);

  // API HOOK FOR POPULAR RESULTS
  useEffect(() => {
    if (search) {
      fetchSearch(search).then((data) => setMovies(data));
    } else {
      fetchPopular().then((data) => setMovies(data));
    }
  }, [search]);

  // RENDER PAGE
  return (
    <div className="Main">
      <Search onSubmit={setSearch} />
      <Results movies={movies} />
    </div>
  );
}

export default Main;
