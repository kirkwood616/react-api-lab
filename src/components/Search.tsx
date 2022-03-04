import { FormEvent, useEffect, useState } from "react";
import Genre from "../models/GenreInterface";
import { fetchGenre } from "../services/MovieDbApiService";

interface Props {
  onSubmit: (search: string) => void;
}

function Search({ onSubmit }: Props) {
  // STATES FOR FORM OPTIONS
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [genre, setGenre] = useState<number>();
  const [rating, setRating] = useState<string>("");
  const [minScore, setMinScore] = useState<number>();

  let searchParams: string = "";

  if (genre) searchParams += `&with_genres=${genre}`;
  if (rating) searchParams += `&certification_country=US&certification=${rating}`;
  if (minScore) searchParams += `&vote_average.gte=${minScore}`;

  // API HOOK FOR GENRES LIST & VALUE
  useEffect(() => {
    fetchGenre().then((data) => setGenreList(data));
  }, []);

  // FUNCTIONS
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit(searchParams);
  }

  return (
    <div className="Search">
      <div>
        <h1>Search</h1>
      </div>
      <form name="searchForm" onSubmit={handleSubmit}>
        {/* GENRE */}
        <div className="genre">
          <label htmlFor="genre">Genre: </label>
          <select name="genre" id="genre" value={genre} onChange={(e) => setGenre(Number(e.target.value))}>
            <option value="">Any</option>
            {genreList.map((genre, i) => (
              <option value={genre.id} key={i}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        {/* RATING */}
        <div className="rating">
          <label htmlFor="rating">MPAA Rating: </label>
          <select name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Any</option>
            <option value="NR">NR - Not Rated</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
            <option value="NC-17">NC-17</option>
          </select>
        </div>
        {/* SCORE */}
        <div className="score">
          <label htmlFor="score">Minimum Score (%): </label>
          <input type="number" min={0} max={100} step={1} name="score" id="score" onChange={(e) => setMinScore(Number(e.target.value) / 10)} />
        </div>
        <div className="searchButton">
          <button type="submit">SEARCH</button>
        </div>
      </form>
    </div>
  );
}

export default Search;
