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
    } else {
      fetchPopular().then((data) => setMovies(data));
    }
  }, [search]);

  // RENDER PAGE
  return (
    <div className="Main">
      <Search onSubmit={setSearch} />
      <Results movies={movies} />
      <div className="attribution">
        <a
          href="https://www.themoviedb.org/?language=en-US"
          target="blank"
          rel="noopener noreferrer"
        >
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
