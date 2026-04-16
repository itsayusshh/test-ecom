import { use, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <div>
        <p
          style={{
            background: "#222021",
            color: "white",
            textAlign: "center  ",
            fontFamily: "Lucida Console, Courier New, monospace",
            padding: "10px",
          }}
        >
          Current offers
        </p>
      </div>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <span className="logo-icon">T </span>
          <span className="logo-text">TEA</span>
        </div>
        {/* Menu */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>LIPS</li>
          <li>EYES</li>
          <li>FACE</li>
          <li>NAILS</li>
          <li>SKIN</li>
          <li>GIFTING</li>
          <li>TEA POP</li>
          <li>249 STORE</li>
        </ul>
        {search && (
          <input
            id="searchBtn"
            type="text"
            placeholder="SEARCH FOR EYELINER"
          ></input>
        )}

        {/* Icons */}
        <div className="icons">
          <span onClick={() => setSearch(!search)}>🔍</span>
          <span>⚡</span>
          <Link to="/cart">🛒</Link>

          <Link to="/"></Link>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </>
  );
}

export default Navbar;
