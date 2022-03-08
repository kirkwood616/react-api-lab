import "./MovieSearch.css";
import { FormEvent, useState } from "react";

interface Props {
  movieSearch: (search: string) => void;
  discoverSearch: (search: string) => void;
}

function MovieSearch({ movieSearch, discoverSearch }: Props) {
  // STATE FOR FORM OPTIONS
  const [searchParams, setSearchParams] = useState<string>("");

  // FUNCTIONS
  function movieSearchHandleSubmit(e: FormEvent) {
    e.preventDefault();
    discoverSearch("");
    movieSearch(searchParams);
  }

  // RENDER PAGE
  return (
    <div className="MovieSearch">
      <form name="movieSearchForm" onSubmit={movieSearchHandleSubmit}>
        <input type="text" name="movieSearchInput" id="movieSearchInput" placeholder="Search For Movies" onChange={(e) => setSearchParams(e.target.value)} />
        <div className="searchButton">
          <button type="submit" className="movieSearchButton">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
}

export default MovieSearch;
