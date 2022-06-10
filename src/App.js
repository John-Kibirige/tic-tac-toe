import "./App.css";
import Card from "./components/Card";
import PreCard from "./components/PreCard";
import React from "react";

function App() {
   // handle the pre-card container
   // what we can do is to use the use state hook;
   const [option, setOption] = React.useState("");

   function clickedCross() {
      setOption((prevOption) => "cross");
   }

   function clickedCircle() {
      setOption((prevOption) => "circle");
   }

   // handle card components
   const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   const [clickedCards, setClickedCards] = React.useState([]);

   // for handling the click event
   function handleClick(num) {
      setClickedCards((prevArr) => {
         if (!prevArr.includes(num)) {
            return [...prevArr, num];
         } else {
            return prevArr;
         }
      });
   }

   console.log(clickedCards);

   // we need to display all the cards in odd positions with option and all those in even position with

   const allCards = cardNumbers.map((Number) => {
      return (
         <Card
            key={Number}
            cardNumber={Number}
            clickCard={() => {
               handleClick(Number);
            }}
         />
      );
   });

   return (
      <div className="App">
         {option === "" && (
            <PreCard cross={clickedCross} circle={clickedCircle} />
         )}
         {option !== "" && (
            <div className="all-cards-container">{allCards}</div>
         )}
      </div>
   );
}

export default App;
