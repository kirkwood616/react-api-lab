import "../styles/Results.css";
import MovieInterface from "../models/MovieInterface";
import Movie from "./Movie";

interface Props {
  movies: MovieInterface[];
}

function Results({ movies }: Props) {
  return (
    <div className="Results">
      {movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
