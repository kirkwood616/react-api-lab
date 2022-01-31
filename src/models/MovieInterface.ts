interface MovieInterface {
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  id: number;
  runtime: number;
  tagline: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  inWatchList: boolean;
}

export default MovieInterface;
