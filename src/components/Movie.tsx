// import "./Movie.css";
import MovieInterface from "../models/MovieInterface";

interface Props {
  movie: MovieInterface;
}
// SINGULAR MOVIE - NOT THE ARRAY OF MOVIES
function Movie({ movie }: Props) {
  let bgColor = "";
  if (movie.vote_average <= 4) {
    bgColor = "red";
  } else if (movie.vote_average >= 4.1 && movie.vote_average <= 5.9) {
    bgColor = "yellow";
  } else {
    bgColor = "green";
  }
  return (
    <div className="Movie">
      <img
        src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
        alt="Movie Poster"
      />
      <p className="Title">{movie.title}</p>
      <div className="Rating" style={{ backgroundColor: bgColor }}>
        <div className="RatingInner">
          {movie.vote_average * 10}
          <span className="Percent">%</span>
        </div>
      </div>
    </div>
  );
}

export default Movie;
