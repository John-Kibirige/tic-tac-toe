import React from "react";
import Cross from "./Cross";
import Circle from "./Circle";

const Card = ({ display, handleCardClicked }) => {
   return (
      <div className="card" onClick={handleCardClicked}>
         <div className="card-design">
            {display === "circle" && <Circle />}
            {display === "cross" && <Cross />}
         </div>
      </div>
   );
};

export default Card;
