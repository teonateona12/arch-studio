import React from "react";
import PortfolioItem from "../components/PortfolioItem.jsx";
import seraph from "../assets/portfolio/mobile/image-seraph.jpg";
import eebox from "../assets/portfolio/mobile/image-eebox.jpg";
import federal from "../assets/portfolio/mobile/image-federal.jpg";
import tower from "../assets/portfolio/mobile/image-228b.jpg";
import delsol from "../assets/portfolio/mobile/image-del-sol.jpg";
import prototype from "../assets/portfolio/mobile/image-prototype.jpg";
import edelweiss from "../assets/portfolio/mobile/image-edelweiss.jpg";

export default function Portfolio() {
  return (
    <div className="portfolioDiv">
      <PortfolioItem
        name="Seraph Station"
        image={seraph}
        date="September 2019"
      />
      <PortfolioItem name="Eebox Building" image={eebox} date="August 2017" />
      <PortfolioItem
        name="Federal II Tower"
        image={federal}
        date="March 2017"
      />
      <PortfolioItem
        name="Project Del Sol"
        image={delsol}
        date="January 2016"
      />
      <PortfolioItem
        name="Le Prototype"
        image={prototype}
        date="October 2015"
      />
      <PortfolioItem name="228B Tower" image={tower} date="April 2025" />
      <PortfolioItem
        name="Grand Edelweiss Hotel"
        image={edelweiss}
        date="December 2013"
      />
    </div>
  );
}
