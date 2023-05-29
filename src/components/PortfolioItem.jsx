import React from "react";

export default function PortfolioItem({ image, name, date }) {
  return (
    <div className="portfolioItem">
      <img src={image} />
      <div className="text-div">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
}
