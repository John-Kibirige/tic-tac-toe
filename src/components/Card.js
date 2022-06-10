import React from "react";

const Card = ({ cardNumber }) => {
   const [state, setState] = React.useState(false);
   let showCross = "";
   function handleClick() {
      showCross = "show-cross"; 
      setState((prevState) => !prevState);
      
   }
   return (
      <div className="card" onClick={handleClick}>
         <div className="card-design">
            <div className="outer-circle">
               <div className="inner-circle"></div>
            </div>
            <div className={`cross ${showCross}`}>
               <span className="to-left"></span>
               <span className="to-right"></span>
            </div>
         </div>
      </div>
   );
};

export default Card;
