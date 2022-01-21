import axios from "axios";
import Movie from "../models/MovieInterface";
import Genre from "../models/GenreInterface";

const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";

export function fetchPopular(): Promise<Movie[]> {
  // POPULAR API
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data.results);
}

// GENRE API
export function fetchGenre(): Promise<Genre[]> {
  return axios
    .get(`https://api.themoviedb.org/3/genre/movie/list`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data.genres);
}
