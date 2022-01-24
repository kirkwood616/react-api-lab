import MovieInterface from "./MovieInterface";

export let WatchListGroup: MovieInterface[] = [];

// export function addWatchList(movie: MovieInterface) {
//   WatchListGroup.push(movie);
// }

export function handleWatchListGroup(movie: MovieInterface) {
  let index: number = WatchListGroup.findIndex((e) => e.id === movie.id);

  if (WatchListGroup.length && index + 1) {
    WatchListGroup.splice(index, 1);
  } else {
    WatchListGroup.push(movie);
  }
  console.log("HANDLE WATCH LIST");
}
