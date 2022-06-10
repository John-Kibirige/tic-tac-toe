import React from "react";

const Card = ({ cardNumber, clickCard }) => {
   return (
      <div className="card" onClick={clickCard}>
         <div className="card-design">
            <div className={false && "outer-circle"}>
               <div className="inner-circle"></div>
            </div>
            <div className={false && "cross"}>
               <span className="to-left"></span>
               <span className="to-right"></span>
            </div>
         </div>
      </div>
   );
};

export default Card;
