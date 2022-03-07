import { useEffect, useState } from "react";
import MovieInterface from "../models/MovieInterface";
import { fetchPopular, fetchDiscoverSearch, fetchMultiSearch } from "../services/MovieDbApiService";
import Results from "./Results";
import Search from "./Search";

function Main() {
  // STATES FOR MOVIES & SEARCH TERMS
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [multiSearch, setMultiSearch] = useState<string>("");
  const [discoverSearch, setDiscoverSearch] = useState<string>("");

  // API HOOK FOR POPULAR & SEARCH RESULTS
  useEffect(() => {
    if (multiSearch) {
      setDiscoverSearch("");
      fetchMultiSearch(multiSearch).then((data) => setMovies(data));
    }
    if (discoverSearch) {
      setMultiSearch("");
      fetchDiscoverSearch(discoverSearch).then((data) => setMovies(data));
    }
    if (!multiSearch && !discoverSearch) {
      fetchPopular().then((data) => setMovies(data));
    }
  }, [multiSearch, discoverSearch]);

  // RENDER PAGE
  return (
    <div className="Main">
      <Search multiSearch={setMultiSearch} discoverSearch={setDiscoverSearch} />
      <h1>{multiSearch || discoverSearch ? "Search Results" : "Trending Movies"}</h1>
      <Results movies={movies} />
      <div className="attribution">
        <a href="https://www.themoviedb.org/?language=en-US" target="blank" rel="noopener noreferrer">
          Powered by:
          <br />
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
            alt="The Movie Database logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Main;
