import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
import MovieInterface from "../models/MovieInterface";
import { fetchCertification, fetchMovie } from "../services/MovieDbApiService";
import "../styles/MoviePage.css";
import Bookmark from "./Bookmark";

function MoviePage() {
  let { watchList, handleWatchList } = useContext(AppContext);
  const [movie, setMovie] = useState<MovieInterface>();
  const [rating, setRating] = useState<String>();
  const [, setReleaseDate] = useState<String>("");
  const id: number = Number(useParams().id!);
  let watchListCheck: MovieInterface | undefined = watchList.find((e) => e.id === movie?.id);

  const location = useLocation();
  const voteAverage = Number(location.state);

  // API HOOKS
  useEffect(() => {
    fetchMovie(id).then((data) => setMovie(data));
  }, [id]);

  useEffect(() => {
    fetchCertification(id).then((data) => {
      let certUS = data.find((e: any) => e.iso_3166_1 === "US");
      if (certUS === undefined) setRating("NR");
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
  if (movie && voteAverage <= 4) {
    bgColor = "red";
  } else if (movie && voteAverage >= 4.1 && voteAverage <= 5.9) {
    bgColor = "yellow";
  } else {
    bgColor = "green";
  }

  // PAGE RENDER
  return (
    <div className="MoviePage">
      <div className="movieContainer">
        <div className="movieImageContainer">
          {movie?.poster_path === null ? (
            <img src="/react-api-lab/notfound.png" alt="Not Found" />
          ) : (
            <img src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`} alt={`${movie?.title} Movie Poster`} />
          )}
        </div>
        <div className="movieInfo">
          <h3>
            {" "}
            {movie?.title} ({movie?.release_date.slice(0, 4)})
          </h3>

          <p>
            <span className="rated">{rating}</span>
            {releaseDateConvert(String(movie?.release_date))} • {movie?.genres.map((genre, index) => (index ? " / " + genre.name : "" + genre.name))} •{" "}
            {timeConvert(Number(movie?.runtime))}
          </p>
          <div className="ratingWatchContainer">
            <div className="Rating" style={{ backgroundColor: bgColor }}>
              <div className="RatingInner">
                {movie ? location.state : "N/A"}
                <span className="Percent">%</span>
              </div>
            </div>
            <button className={watchListCheck ? "inWatchList" : "addWatchList"} onClick={() => handleWatchList(movie!)}>
              <Bookmark check={watchListCheck} />
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
