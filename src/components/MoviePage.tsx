import "./MoviePage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInterface from "../models/MovieInterface";
import { fetchCertification, fetchMovie } from "../services/MovieDbApiService";
import { handleWatchListGroup, WatchListGroup } from "../models/WatchListGroup";

function MoviePage() {
  const [movie, setMovie] = useState<MovieInterface>();
  const [rating, setRating] = useState<String>();
  const [, setReleaseDate] = useState<String>("");
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
    const [year, month, day] = date.split("-");
    const dateObj = { month, day, year };
    const dateFormat = `${dateObj.month}/${dateObj.day}/${dateObj.year}`;
    return dateFormat;
  }

  // FORMAT MOVIE LENGTH FUNCTION
  function timeConvert(time: number): String {
    let hours = Math.floor(time / 60);
    let minutes = Math.round(time % 60);
    return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`;
  }

  // BACKGROUND COLOR
  let bgColor = "";

  // WORKAROUND FOR NOT KNOWING CONTEXT YET - DUPLICATE WATCHLIST STATE
  let [watchList, setWatchList] = useState<MovieInterface[]>(WatchListGroup);

  function handleWatchList(movie: MovieInterface) {
    let index: number = watchList.findIndex((e) => e.id === movie.id);

    if (watchList.length && index + 1) {
      setWatchList((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    } else {
      setWatchList((prev) => [...watchList, movie]);
    }
    handleWatchListGroup(movie);
  }

  if (movie && movie.vote_average <= 4) {
    bgColor = "red";
  } else if (movie && movie.vote_average >= 4.1 && movie.vote_average <= 5.9) {
    bgColor = "yellow";
  } else {
    bgColor = "green";
  }

  let watchListCheck = watchList.find((e) => e.id === movie?.id);

  // PAGE RENDER
  return (
    <div className="MoviePage">
      <div className="movieContainer">
        <div className="movieImageContainer">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
            alt={`${movie?.title} Movie Poster`}
          />
        </div>
        <div className="movieInfo">
          <h3>
            {" "}
            {movie?.title} ({movie?.release_date.slice(0, 4)})
          </h3>

          <p>
            <span className="rated">{rating}</span>
            {releaseDateConvert(String(movie?.release_date))} •{" "}
            {movie?.genres.map((genre, index) =>
              index ? " / " + genre.name : "" + genre.name
            )}{" "}
            • {timeConvert(Number(movie?.runtime))}
          </p>
          <div className="ratingWatchContainer">
            <div className="Rating" style={{ backgroundColor: bgColor }}>
              <div className="RatingInner">
                {movie ? movie?.vote_average * 10 : "N/A"}
                <span className="Percent">%</span>
              </div>
            </div>
            <button id="addWatchList" onClick={() => handleWatchList(movie!)}>
              {watchListCheck ? "- WATCHLIST" : "+ WATCHLIST"}
            </button>
          </div>
          <p className="tagLine">{movie?.tagline}</p>
          <h4>Overview</h4>
          <p className="overview">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
