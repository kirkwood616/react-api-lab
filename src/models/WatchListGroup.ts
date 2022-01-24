import MovieInterface from "./MovieInterface";

export let WatchListGroup: MovieInterface[] = [];

export function addWatchList(movie: MovieInterface) {
  WatchListGroup.push(movie);
}

export function removeWatchList(movie: MovieInterface) {
  // WatchListGroup.splice(0)
  console.log("REMOVE FROM WATCHLIST");
}
