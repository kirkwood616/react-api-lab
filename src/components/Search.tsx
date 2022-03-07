import { useState } from "react";
import DiscoverSearch from "./DiscoverSearch";
import MultiSearch from "./MultiSearch";

interface Props {
  multiSearch: (search: string) => void;
  discoverSearch: (search: string) => void;
}

function Search({ multiSearch, discoverSearch }: Props) {
  const [isMultiActive, setIsMultiActive] = useState<Boolean>(true);
  return (
    <div className="Search">
      <div>
        <h1>Search</h1>
      </div>
      {isMultiActive ? <MultiSearch multiSearch={multiSearch} /> : <DiscoverSearch discoverSearch={discoverSearch} />}
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
