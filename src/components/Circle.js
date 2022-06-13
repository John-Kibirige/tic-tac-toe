import React from "react";

function Circle({ outerColor, innerColor }) {
   return (
      <div className={`outer-circle ${outerColor}`}>
         <div className={`inner-circle ${innerColor}`}></div>
      </div>
   );
}

export default Circle;
