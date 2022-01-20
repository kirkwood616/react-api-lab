// import "./Movie.css";
import MovieInterface from "../models/MovieInterface";

interface Props {
  movie: MovieInterface;
}
// SINGULAR MOVIE - NOT THE ARRAY OF MOVIES
function Movie({ movie }: Props) {
  return (
    <div className="Movie">
      <img
        src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
        alt="Movie Poster"
      />
      <p>{movie.title}</p>
      <p>{movie.vote_average}</p>
    </div>
  );
}

export default Movie;
