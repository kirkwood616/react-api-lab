import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import MovieInterface from "../models/MovieInterface";
import "../styles/Movie.css";
import Bookmark from "./Bookmark";

interface Props {
  movie: MovieInterface;
}

function Movie({ movie }: Props) {
  let { watchList, handleWatchList } = useContext(AppContext);

  const watchListCheck: MovieInterface | undefined = watchList.find((e) => e.id === movie?.id);

  // RATING DISPLAY LOGIC
  function getAverageColor() {
    let bgColor = "";
    if (movie.vote_average <= 4) {
      bgColor = "red";
    } else if (movie.vote_average >= 4.1 && movie.vote_average <= 5.9) {
      bgColor = "yellow";
    } else {
      bgColor = "green";
    }
    return bgColor;
  }

  const bgColor = getAverageColor();

  // RENDER PAGE
  return (
    <div className="Movie">
      <Link to={`/react-api-lab/movie/${movie.id}`} state={(movie.vote_average * 10).toFixed()}>
        {movie.poster_path === null ? (
          <img src="/react-api-lab/notfound.png" alt="Not Found" />
        ) : (
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title} Movie Poster`} />
        )}
      </Link>
      <p className="Title">{movie.title}</p>
      <div className="bottomContainer">
        <div className="Rating" style={{ backgroundColor: bgColor }}>
          <div className="RatingInner">
            {(movie.vote_average * 10).toFixed()}
            <span className="Percent">%</span>
          </div>
        </div>
        <button className={watchListCheck ? "inWatchList" : "addWatchList"} onClick={() => handleWatchList(movie)}>
          <Bookmark check={watchListCheck} />
        </button>
      </div>
    </div>
  );
}

export default Movie;
