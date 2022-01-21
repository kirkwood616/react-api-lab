// import "./Search.css";
import { FormEvent, useEffect, useState } from "react";
import Genre from "../models/GenreInterface";
import { fetchGenre } from "../services/MovieDbApiService";

interface Props {}

function Search({}: Props) {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [genre, setGenre] = useState<number>();
  const [runTime, setRunTime] = useState<number>();
  const [minScore, setMinScore] = useState<number>();

  // API HOOK FOR GENRES
  useEffect(() => {
    fetchGenre().then((data) => setGenreList(data));
  }, []);

  // FUNCTIONS
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(runTime);
  }

  return (
    <div className="Search">
      <h1>Search</h1>
      <form name="searchForm" onSubmit={handleSubmit}>
        {/* GENRE */}
        <label htmlFor="genre">Genre: </label>
        <select
          name="genre"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(Number(e.target.value))}
        >
          <option value="">Any</option>
          {genreList.map((genre, i) => (
            <option value={genre.id} key={i}>
              {genre.name}
            </option>
          ))}
        </select>
        {/* RUN-TIME */}
        <label htmlFor="runTime">Runtime Length: </label>
        <input
          min={0}
          max={1000}
          type="number"
          name="runTime"
          id="runTime"
          onChange={(e) => setRunTime(Number(e.target.value))}
        />
        {/* SCORE */}
        <label htmlFor="score">Minimum Score: </label>
        <input
          type="number"
          min={0}
          max={10}
          step={0.5}
          name="score"
          id="score"
          onChange={(e) => setMinScore(Number(e.target.value))}
        />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
}

export default Search;
