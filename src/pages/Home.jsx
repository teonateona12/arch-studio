import React from "react";
import Header from "../components/Header.jsx";
import ProjectMobile from "../assets/home/mobile/image-hero-paramour.jpg";
import ProjectTablet from "../assets/home/tablet/image-hero-paramour.jpg";
import ProjectDesktop from "../assets/home/desktop/image-hero-paramour.jpg";

import Arrow from "../assets/icons/icon-arrow.svg";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="project">
        <img className="mobile" src={ProjectMobile} />
        <img className="tablet" src={ProjectTablet} />
        <img className="desktop" src={ProjectDesktop} />
        <div className="text-div">
          <h1>
            Project <br />
            Paramour
          </h1>
          <p>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <div className="button-div">
            <button>See Our Portfolio</button>
            <img src={Arrow} />
          </div>
        </div>
      </div>
    </div>
  );
}
