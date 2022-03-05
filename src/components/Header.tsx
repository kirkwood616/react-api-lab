import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

function Header() {
  let { watchList } = useContext(AppContext);
  return (
    <div className="Header">
      <h2>Movie HUB</h2>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          <Link to="/react-api-lab">Home</Link>
        </li>
        <span className="pipe">|</span>
        <li>
          {/* <Link to="/watchlist">Watchlist</Link> */}
          <Link to="/react-api-lab/watchlist">Watchlist</Link>
          <span className="watchListCount">{watchList.length ? ` (${watchList.length})` : ""}</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
