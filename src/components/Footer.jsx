import React from "react";
import Arrow from "../assets/icons/icon-arrow.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <h2>Arch</h2>
      </div>
      <p>Portfolio</p>
      <p> About Us</p>
      <p>Contact</p>
      <div className="button-div">
        <p>See Our Portfolio</p>
        <img src={Arrow} />
      </div>
    </footer>
  );
}
