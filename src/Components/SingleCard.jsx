import React from "react";
import "./SingleCard.css";

export default function SingleCard({handleChoice,card}) {
  
    const handleClick = (card) => {
        console.log(card);
        handleChoice(card);
    }

    return (
    <div className="card">
      <img className="front" src={card.src} alt="card front" />
      <img onClick={() => handleClick(card)} className="back" src="/img/cover.png" alt="card back" />
    </div>
  );
}
