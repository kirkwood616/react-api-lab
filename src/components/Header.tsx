import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

function Header() {
  let { watchList } = useContext(AppContext);
  return (
    <div className="Header">
      <Link to="/react-api-lab">
        <div className="logoContainer">
          <div className="reel"></div>
          <div className="logo">
            <h2>
              <span className="movie">movie</span>
              <span className="hub">HUB</span>
            </h2>
          </div>
          <div className="reel"></div>
        </div>
      </Link>
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
