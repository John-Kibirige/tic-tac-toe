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
   let displayedObj = cardNumbers.reduce((acc, curr) => {
      acc.push({ number: curr, display: "" });
      return acc;
   }, []);

   const [clickedCards, setClickedCards] = React.useState([]);
   const [displayed, setDisplayed] = React.useState(displayedObj);

   const handleCardClicked = (number) => {
      //   state of clicked cards
      setClickedCards((prevClickedCards) => {
         if (!prevClickedCards.includes(number))
            return [...prevClickedCards, number];
         else return prevClickedCards;
      });
      // the state of clicked values
      if (!clickedCards.includes(number)) {
         const odd = (clickedCards.length + 1) % 2 === 1;
         setDisplayed((prevDisplayed) => {
            return prevDisplayed.map((object) => {
               return object.number === number
                  ? {
                       ...object,
                       display: odd
                          ? option
                          : option === "circle"
                          ? "cross"
                          : "circle",
                    }
                  : object;
            });
         });
      }
   };

   // we need to display all the cards in odd positions with option and all those in even position with

   const allCards = displayed.map((obj) => {
      return (
         <Card
            key={obj.number}
            display={obj.display}
            handleCardClicked={() => {
               handleCardClicked(obj.number);
               // the cards at this point exclude the current
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
