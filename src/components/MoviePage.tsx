// import "./MoviePage.css";
import { release } from "os";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInterface from "../models/MovieInterface";
import { fetchCertification, fetchMovie } from "../services/MovieDbApiService";

function MoviePage() {
  const [movie, setMovie] = useState<MovieInterface>();
  const [rating, setRating] = useState<String>();
  const [releaseDate, setReleaseDate] = useState<String>("");
  const id: number = Number(useParams().id!);

  // API HOOKS
  useEffect(() => {
    fetchMovie(id).then((data) => setMovie(data));
  }, [id]);

  useEffect(() => {
    fetchCertification(id).then((data) => {
      let certUS = data.find((e: any) => e.iso_3166_1 === "US");
      let rated = certUS.release_dates.find((date: any) => date.certification);
      rated ? setRating(rated.certification) : setRating("NR");
      setReleaseDate(rated.release_date);
    });
  }, [id]);

  // FORMAT RELEASE DATE
  function releaseDateConvert(date: string): String {
    let newDate: string = releaseDate.slice(0, 9);
    const [year, month, day] = newDate.split("-");
    const dateObj = { month, day, year };
    const dateFormat = `${dateObj.month}/${dateObj.day}/${dateObj.year}`;
    // console.log(dateFormat);

    return dateFormat;
  }

  // FORMAT MOVIE LENGTH FUNCTION
  function timeConvert(time: number): String {
    let hours = Math.floor(time / 60);
    let minutes = Math.round(time % 60);
    return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`;
  }

  // let runTime = timeConvert()

  // PAGE RENDER
  return (
    <div className="MoviePage">
      <h1>Movie Page</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
        alt={`${movie?.title} Movie Poster`}
      />
      <p>
        {movie?.title} ({releaseDate.slice(0, 4)})
      </p>
      <p>
        Release Date: {releaseDateConvert(String(releaseDate))}
        {/* {dateObj.month}/{dateObj.day}/{dateObj.year} */}
      </p>
      <p>Runtime: {timeConvert(Number(movie?.runtime))}</p>
      <p>Rated: {rating}</p>
      <p>{movie?.vote_average}</p>
      <p>{movie?.overview}</p>
    </div>
  );
}

export default MoviePage;
