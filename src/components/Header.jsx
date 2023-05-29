import React from "react";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={Logo} />
        </Link>

        <div className="mobile-nav" onClick={() => setNav(!nav)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="tablet-nav">
          <Link to="/portfolio">
            <h3>Portfolio</h3>
          </Link>
          <Link to="/about">
            <h3>About Us</h3>{" "}
          </Link>
          <Link to="/contact">
            <h3> Contact</h3>
          </Link>
        </div>
      </div>
      {nav && (
        <div className="nav">
          <Link to="/portfolio">
            <h1>Portfolio</h1>
          </Link>
          <Link to="/about">
            <h1>About Us</h1>{" "}
          </Link>
          <Link to="/contact">
            <h1> Contact</h1>
          </Link>
        </div>
      )}
    </>
  );
}
