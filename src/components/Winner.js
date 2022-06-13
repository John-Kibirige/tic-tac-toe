import React from "react";
import Cross from "./Cross";
import Circle from "./Circle";

const Winner = ({ winner, handleClick }) => {
   let draw = winner === "draw";
   return (
      <div className="winner">
         {!draw && (
            <div className="winner-symbol">
               {winner === "cross" && <Cross color={"bg-color"} />}
               {winner === "circle" && (
                  <Circle outerColor={"bg-color"} innerColor={"bg-inner"} />
               )}
               {winner && <h2>Wins</h2>}
            </div>
         )}
         {draw && <h1 className="draw-header">Draw !!</h1>}

         <button className="r-btn" onClick={handleClick}>
            Restart
         </button>
      </div>
   );
};

export default Winner;
