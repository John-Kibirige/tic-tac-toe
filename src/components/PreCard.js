import React from "react";

const PreCard = ({ cross, circle }) => {
   return (
      <div className="precard-container">
         <h2>Select player</h2>
         <div className="options">
            <div className="x-option hover-both" onClick={cross}>
               <div className="wrapper">
                  <span className="to-left"></span>
                  <span className="to-right"></span>
               </div>
            </div>
            <div className="o-option hover-both" onClick={circle}>
               <div className="c-wrapper">
                  <div className="pre-outer">
                     <div className="pre-inner"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PreCard;
