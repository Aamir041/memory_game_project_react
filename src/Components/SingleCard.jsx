import React from "react";
import "./SingleCard.css";

export default function SingleCard({ handleChoice, card, flipped, disable }) {
  const handleClick = (card) => {
    // console.log(card);
    if(!disable){
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          onClick={() => handleClick(card)}
          className="back"
          src="/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
}
