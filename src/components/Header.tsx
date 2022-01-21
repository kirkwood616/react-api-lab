// import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h2>Movie APP</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <span className="pipe">|</span>
        <li>
          <a href="/">Watchlist</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
