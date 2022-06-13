import React from "react";
import Cross from "./Cross";
import Circle from "./Circle";

const Card = ({ display, handleCardClicked, winnerColor, noWinner }) => {
   return (
      <div
         className={`card ${winnerColor ? "win-card" : ""}`}
         onClick={!noWinner ? handleCardClicked : undefined}
      >
         <div className="card-design">
            {display === "circle" && <Circle />}
            {display === "cross" && <Cross />}
         </div>
      </div>
   );
};

export default Card;
