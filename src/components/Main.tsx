// import "./Main.css";
import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { fetchPopular } from "../services/MovieDbApiService";

function Main() {
  // STATES FOR MOVIES & SEARCH TERMS
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("");

  // API HOOK
  useEffect(() => {
    fetchPopular().then((data) => setMovies(data));
  }, []);

  // RENDER PAGE
  return (
    <div className="Main">
      <h1>Main</h1>
      {movies.map((movie, i) => (
        <li key={i}>
          {movie.title} {movie.vote_average}
        </li>
      ))}
    </div>
  );
}

export default Main;
