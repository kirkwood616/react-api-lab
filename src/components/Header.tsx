// import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h2>Movie HUB</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span className="pipe">|</span>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
