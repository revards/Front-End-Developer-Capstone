import restaurant from "../images/restaurant.jpg";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-container">
        <img id="footer-img" src={restaurant} alt="Little Lemon logo" />
        <ul className="navigation">
          <li>Doormat Navigation</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>About</Link>
          </li>
          <li>
            <Link to={"/"}>Menu</Link>
          </li>
          <li>
            <Link to={"/reserve"}>Resevations</Link>
          </li>
          <li>
            <Link to={"/"}>Order Online</Link>
          </li>
          <li>
            <Link to={"/"}>Login</Link>
          </li>
        </ul>
        <ul className="contact">
          <li>Contact</li>
          <li>
            <Link to={"geo:100,100"}>Lemon Street, Chicago</Link>
          </li>
          <li>
            <Link to={"tel:+11111-12311"}>11111-12311</Link>
          </li>
          <li>
            <Link to={"mailto:contact@littlelemon.com"}>contact@littlelemon.com</Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>Social media links</li>
          <li>
            <Link to={"https://www.facebook.com"}>Facebook</Link>
          </li>
          <li>
            <Link to={"https://www.instagram.com"}>Instagram</Link>
          </li>
          <li>
            <Link to={"https://www.x.com"}>X</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
