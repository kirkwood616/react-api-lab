import MovieInterface from "./MovieInterface";

export let WatchListGroup: MovieInterface[] = [];

export function handleWatchListGroup(movie: MovieInterface) {
  let index: number = WatchListGroup.findIndex((e) => e.id === movie.id);

  if (WatchListGroup.length && index + 1) {
    movie.inWatchList = false;
    WatchListGroup.splice(index, 1);
  } else {
    movie.inWatchList = true;
    WatchListGroup.push(movie);
  }
  // console.log("HANDLE WATCH LIST");
  // console.log(WatchListGroup);
}
