// import "./MultiSearch.css";
import { FormEvent, useState } from "react";

interface Props {
  multiSearch: (search: string) => void;
}

function MultiSearch({ multiSearch }: Props) {
  // STATE FOR FORM OPTIONS
  const [searchParams, setSearchParams] = useState<string>("");

  // FUNCTIONS
  function multiSearchHandleSubmit(e: FormEvent) {
    e.preventDefault();
    multiSearch(searchParams);
  }

  // RENDER
  return (
    <div className="MultiSearch">
      <form name="multiSearchForm" onSubmit={multiSearchHandleSubmit}>
        <input type="text" name="multiInput" id="multiInput" placeholder="Search Movies, TV Shows, Person, etc." onChange={(e) => setSearchParams(e.target.value)} />
        <div className="searchButton">
          <button type="submit">SEARCH</button>
        </div>
      </form>
    </div>
  );
}

export default MultiSearch;
