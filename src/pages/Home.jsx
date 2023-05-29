import React from "react";
import ProjectMobile from "../assets/home/mobile/image-hero-paramour.jpg";
import ProjectTablet from "../assets/home/tablet/image-hero-paramour.jpg";
import ProjectDesktop from "../assets/home/desktop/image-hero-paramour.jpg";
import Arrow from "../assets/icons/icon-arrow.svg";
import Welcome from "../assets/home/desktop/image-welcome.jpg";
import TeamMobile from "../assets/home/mobile/image-small-team.jpg";
import TeamTablet from "../assets/home/tablet/image-small-team.jpg";
import TeamDesktop from "../assets/home/desktop/image-small-team.jpg";
import OneMobile from "../assets/portfolio/mobile/image-prototype.jpg";
import OneTablet from "../assets/portfolio/tablet/image-prototype.jpg";
import OneDesktop from "../assets/portfolio/desktop/image-prototype.jpg";
import TwoMobile from "../assets/portfolio/mobile/image-228b.jpg";
import TwoTablet from "../assets/portfolio/tablet/image-228b.jpg";
import TwoDesktop from "../assets/portfolio/desktop/image-228b.jpg";
import ThreeMobile from "../assets/portfolio/mobile/image-del-sol.jpg";
import ThreeTablet from "../assets/portfolio/tablet/image-del-sol.jpg";
import ThreeDesktop from "../assets/portfolio/desktop/image-del-sol.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
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
            <Link to="/portfolio">
              <button>See Our Portfolio</button>
            </Link>
            <img src={Arrow} />
          </div>
        </div>
      </div>
      <div className="welcome">
        <div>
          <h3>Welcome to Arch Studio</h3>
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results. <br /> <br /> Over the past 10 years, we have worked on all
            kinds of projects. From stations to high-rise buildings, we create
            spaces that inspire and delight. <br />
            <br /> We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
        <img src={Welcome} />
      </div>
      <div className="project">
        <img className="mobile" src={TeamMobile} />
        <img className="tablet" src={TeamTablet} />
        <img className="desktop" src={TeamDesktop} />
        <div className="text-div">
          <h1>
            Small team, <br />
            big ideas
          </h1>
          <div className="button-div">
            <Link to="/about">
              <button>About Us</button>
            </Link>
            <img src={Arrow} />
          </div>
        </div>
      </div>
      <div className="featured">
        <div className="featured-text-div">
          <h3>Featured</h3>
          <div className="button-div">
            <Link to="/portfolio">
              <p>See All</p>
            </Link>
            <img src={Arrow} />
          </div>
        </div>
        <div className="images-div">
          <div className="one-text-image">
            <img className="one-mobile" src={OneMobile} />
            <img className="one-tablet" src={OneTablet} />
            <img className="one-desktop" src={OneDesktop} />
            <div>
              <h3>Project Del Sol</h3>
              <Link to="/portfolio">
                <button>View All Projects</button>
              </Link>
            </div>
          </div>
          <div className="one-text-image">
            <img className="two-mobile" src={TwoMobile} />
            <img className="two-tablet" src={TwoTablet} />
            <img className="two-desktop" src={TwoDesktop} />
            <div>
              <h3>Project Del Sol</h3>
              <Link to="/portfolio">
                <button>View All Projects</button>
              </Link>
            </div>
          </div>
          <div className="one-text-image">
            <img className="three-mobile" src={ThreeMobile} />
            <img className="three-tablet" src={ThreeTablet} />
            <img className="three-desktop" src={ThreeDesktop} />
            <div>
              <h3>Project Del Sol</h3>
              <Link to="/portfolio">
                <button>View All Projects</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
