import logo from "../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="nav-header grid-container">
      <Link to={"/"}>
        <img src={logo} alt="Little lemon Logo" aria-label="link"/>
      </Link>
      <nav>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Menu</Link>
          <Link to={"/reserve"}>Resevations</Link>
          <Link to={"/"}>Order Online</Link>
          <Link to={"/"}>Login</Link>
        </ul>
      </nav>
    </header>
  );
};
