// import "./MoviePage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInterface from "../models/MovieInterface";
import { fetchCertification, fetchMovie } from "../services/MovieDbApiService";

function MoviePage() {
  const [movie, setMovie] = useState<MovieInterface>();
  const [certification, setCertification] = useState<any[]>([]);
  const id: number = Number(useParams().id!);

  console.log(certification);

  // console.log(id);
  // console.log(certification);

  // API HOOK
  useEffect(() => {
    fetchMovie(id).then((data) => setMovie(data));
  }, [id]);

  useEffect(() => {
    fetchCertification(id).then((data) => {
      setCertification(data);
    });
  }, [id]);

  let certUS = certification.find((e) => e.iso_3166_1 === "US");

  console.log(certUS);

  // PAGE RENDER
  return (
    <div className="MoviePage">
      <h1>Movie Page</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
        alt={`${movie?.title} Movie Poster`}
      />
      <p>{movie?.vote_average}</p>
      <p>{movie?.title}</p>
      <p>{movie?.overview}</p>
    </div>
  );
}

export default MoviePage;
