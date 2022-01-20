import axios from "axios";

export function fetchPopular() {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY || "";

  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day`, {
      params: {
        api_key: apiKey,
      },
    })
    .then((res) => res.data.results);
}
