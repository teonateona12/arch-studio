import React from "react";
import Logo from "../assets/logo.svg";
import { useState } from "react";
export default function Header() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="header">
        <img src={Logo} />
        <div className="mobile-nav" onClick={() => setNav(!nav)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="tablet-nav">
          <h3>Portfolio</h3>
          <h3>About Us</h3>
          <h3> Contact</h3>
        </div>
      </div>
      {nav && (
        <div className="nav">
          <h1>Portfolio</h1>
          <h1>About Us</h1>
          <h1> Contact</h1>
        </div>
      )}
    </>
  );
}
