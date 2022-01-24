// import "./MoviePage.css";
import { useEffect, useState } from "react";
import MovieInterface from "../models/MovieInterface";
import { fetchMovie } from "../services/MovieDbApiService";

interface Props {
  movie: MovieInterface;
}

function MoviePage({ movie }: Props) {
  const [movieResult, setMovieResult] = useState<MovieInterface>();

  // API HOOK
  useEffect(() => {
    fetchMovie(movie.id).then((data) => setMovieResult(data));
  });

  // PAGE RENDER
  return (
    <div className="MoviePage">
      <h1>Movie Page</h1>
      {movie.id}
    </div>
  );
}

export default MoviePage;
