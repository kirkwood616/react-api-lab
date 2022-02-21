// import "./Movie.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import MovieInterface from "../models/MovieInterface";
import { WatchListGroup } from "../models/WatchListGroup";

interface Props {
  movie: MovieInterface;
  onAdd: () => void;
}
// SINGULAR MOVIE - NOT THE ARRAY OF MOVIES
function Movie({ movie, onAdd }: Props) {
  // WORKAROUND FOR NOT KNOWING CONTEXT YET - DUPLICATE WATCHLIST STATE
  let [watchList] = useState<MovieInterface[]>(WatchListGroup);

  let watchListCheck = watchList.find((e) => e.id === movie?.id);

  // RATING DISPLAY LOGIC
  let bgColor = "";
  if (movie.vote_average <= 4) {
    bgColor = "red";
  } else if (movie.vote_average >= 4.1 && movie.vote_average <= 5.9) {
    bgColor = "yellow";
  } else {
    bgColor = "green";
  }
  // RENDER PAGE
  return (
    <div className="Movie">
      {/* <Link to={`/movie/${movie.id}`}> */}
      <Link to={`/react-api-lab/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`${movie.title} Movie Poster`}
        />
      </Link>
      <p className="Title">{movie.title}</p>
      <div className="Rating" style={{ backgroundColor: bgColor }}>
        <div className="RatingInner">
          {movie.vote_average * 10}
          <span className="Percent">%</span>
        </div>
      </div>
      <button id="addWatchList" onClick={onAdd}>
        {watchListCheck ? "- WATCHLIST" : "+ WATCHLIST"}
      </button>
    </div>
  );
}

export default Movie;
