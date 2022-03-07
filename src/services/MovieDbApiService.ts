import axios from "axios";
import Movie from "../models/MovieInterface";
import Genre from "../models/GenreInterface";
import MovieInterface from "../models/MovieInterface";

const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";

// POPULAR API
export function fetchPopular(): Promise<Movie[]> {
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

// MULTI SEARCH
export function fetchMultiSearch(search: string): Promise<Movie[]> {
  return axios
    .get(`https://api.themoviedb.org/3/search/multi`, {
      params: {
        api_key: apiKey,
        language: "en-US",
        query: search,
      },
    })
    .then((res) => res.data.results);
}

// DISCOVER SEARCH
export function fetchDiscoverSearch(search: string): Promise<Movie[]> {
  return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US${search}`).then((res) => res.data.results);
}

// SINGLE MOVIE API
export function fetchMovie(id: number): Promise<MovieInterface> {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`).then((res) => res.data);
}

// SINGLE MOVIE CERTIFICATION(RATED) API
export function fetchCertification(id: number) {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${apiKey}`).then((res) => res.data.results);
}
