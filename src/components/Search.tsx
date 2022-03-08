import { useState } from "react";
import DiscoverSearch from "./DiscoverSearch";
import MovieSearch from "./MovieSearch";

interface Props {
  movieSearch: (search: string) => void;
  discoverSearch: (search: string) => void;
}

function Search({ movieSearch, discoverSearch }: Props) {
  // STATE FOR SEARCH TYPE
  const [isKeywordActive, setIsKeywordActive] = useState<Boolean>(true);

  // RENDER PAGE
  return (
    <div className="Search">
      <div>
        <h1>{isKeywordActive ? "Search" : "Discover Search"}</h1>
      </div>
      {isKeywordActive ? (
        <MovieSearch movieSearch={movieSearch} discoverSearch={discoverSearch} />
      ) : (
        <DiscoverSearch discoverSearch={discoverSearch} movieSearch={movieSearch} />
      )}
      {isKeywordActive ? (
        <span className="toggleSearch" onClick={() => setIsKeywordActive(false)}>
          Discover Search
        </span>
      ) : (
        <span className="toggleSearch" onClick={() => setIsKeywordActive(true)}>
          Keyword Search
        </span>
      )}
    </div>
  );
}

export default Search;
