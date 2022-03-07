import "./MovieSearch.css";
import { FormEvent, useState } from "react";

interface Props {
  movieSearch: (search: string) => void;
}

function MultiSearch({ movieSearch }: Props) {
  // STATE FOR FORM OPTIONS
  const [searchParams, setSearchParams] = useState<string>("");

  // FUNCTIONS
  function multiSearchHandleSubmit(e: FormEvent) {
    e.preventDefault();
    movieSearch(searchParams);
  }

  // RENDER PAGE
  return (
    <div className="MovieSearch">
      <form name="movieSearchForm" onSubmit={multiSearchHandleSubmit}>
        <input type="text" name="movieSearchInput" id="movieSearchInput" placeholder="Search For Movies" onChange={(e) => setSearchParams(e.target.value)} />
        <div className="searchButton">
          <button type="submit">SEARCH</button>
        </div>
      </form>
    </div>
  );
}

export default MultiSearch;
