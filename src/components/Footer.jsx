import React from "react";
import Arrow from "../assets/icons/icon-arrow.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <Link to="/">
          <h2>Arch</h2>
        </Link>
      </div>
      <Link to="/portfolio">
        <p>Portfolio</p>
      </Link>
      <Link to="/about">
        <p>About Us</p>
      </Link>
      <Link to="/contact">
        <p> Contact</p>
      </Link>
      <div className="button-div">
        <Link to="/portfolio">
          <p>See Our Portfolio</p>
        </Link>
        <img src={Arrow} />
      </div>
    </footer>
  );
}
