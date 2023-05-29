import React from "react";
import image from "../assets/about/mobile/image-hero.jpg";
import imageD from "../assets/about/desktop/image-heritage.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about-div">
        <img src={image} />
        <div className="text-div">
          <h2>Your team of professionals</h2>
          <p>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </p>
        </div>
      </div>
      <div className="heritage">
        <img src={imageD} />
        <div>
          <h2>Our Heritage</h2>
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.{" "}
            <br />
            <br /> Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
            <br />
            <br /> Our small team of world-class professionals provides input on
            every project.
          </p>
        </div>
      </div>
    </div>
  );
}
