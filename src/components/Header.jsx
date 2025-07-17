import logo from "../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="nav-header grid-container">
      <Link to={"/"}>
        <img src={logo} alt="Little lemon Logo" aria-label="link"/>
      </Link>
      <button
        className="hamburger"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav id="main-nav" className={menuOpen ? "open" : ""}>
        <ul>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to={"/reserve"} onClick={() => setMenuOpen(false)}>Resevations</Link>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>Order Online</Link>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>Login</Link>
        </ul>
      </nav>
    </header>
  );
};
