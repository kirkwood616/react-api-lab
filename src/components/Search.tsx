import { useState } from "react";
import DiscoverSearch from "./DiscoverSearch";
import MovieSearch from "./MovieSearch";

interface Props {
  movieSearch: (search: string) => void;
  discoverSearch: (search: string) => void;
}

function Search({ movieSearch, discoverSearch }: Props) {
  // STATE FOR SEARCH TYPE
  const [isMultiActive, setIsMultiActive] = useState<Boolean>(true);

  // RENDER PAGE
  return (
    <div className="Search">
      <div>
        <h1>Search</h1>
      </div>
      {isMultiActive ? <MovieSearch movieSearch={movieSearch} /> : <DiscoverSearch discoverSearch={discoverSearch} />}
      {isMultiActive ? (
        <span className="toggleSearch" onClick={() => setIsMultiActive(false)}>
          Discover Search
        </span>
      ) : (
        <span className="toggleSearch" onClick={() => setIsMultiActive(true)}>
          Keyword Search
        </span>
      )}
    </div>
  );
}

export default Search;
