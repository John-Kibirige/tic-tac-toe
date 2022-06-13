import React from "react";

function Cross({ color }) {
   return (
      <div className="cross">
         <span className={`to-left ${color}`}></span>
         <span className={`to-right ${color}`}></span>
      </div>
   );
}

export default Cross;
