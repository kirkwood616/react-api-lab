import "../styles/DiscoverSearch.css";

import { FormEvent, useEffect, useState } from "react";
import Genre from "../models/GenreInterface";
import { fetchGenre } from "../services/MovieDbApiService";

interface Props {
  discoverSearch: (search: string) => void;
  movieSearch: (search: string) => void;
}

function DiscoverSearch({ discoverSearch, movieSearch }: Props) {
  // STATES FOR FORM OPTIONS
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [genre, setGenre] = useState<number>();
  const [rating, setRating] = useState<string>("");
  const [minScore, setMinScore] = useState<number>();

  const scoreValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let searchParams: string = "";

  if (genre) searchParams += `&with_genres=${genre}`;
  if (rating) searchParams += `&certification_country=US&certification=${rating}`;
  if (minScore) searchParams += `&vote_average.gte=${minScore}`;

  // API HOOK FOR GENRES LIST & VALUE
  useEffect(() => {
    fetchGenre().then((data) => setGenreList(data));
  }, []);

  // FUNCTIONS
  function discoverHandleSubmit(e: FormEvent) {
    e.preventDefault();
    movieSearch("");
    discoverSearch(searchParams);
  }

  // RENDER PAGE
  return (
    <div className="DiscoverSearch">
      <form name="discoverSearchForm" onSubmit={discoverHandleSubmit}>
        {/* GENRE */}
        <div className="inputContainer">
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
            <label htmlFor="score">Minimum Score: </label>
            <select name="score" id="score" value={minScore} onChange={(e) => setMinScore(Number(e.target.value))}>
              {scoreValues.map((score, i) => (
                <option value={score} key={i}>
                  {score} / 10
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="searchButton">
          <button type="submit" className="discoverSearchButton">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
}

export default DiscoverSearch;
