import "./App.css";
import Card from "./components/Card";
import PreCard from "./components/PreCard";
import React from "react";
import Winner from "./components/Winner";

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

   // state for monitoring the odd and even values
   const [oddValues, setOddValues] = React.useState([]);
   const [evenValues, setEvenValues] = React.useState([]);

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
         if (odd) {
            setOddValues((prevOddValues) => {
               return [...prevOddValues, number];
            });
         } else {
            setEvenValues((prevEvenValues) => {
               return [...prevEvenValues, number];
            });
         }

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

   // monitor the results
   const [result, setResults] = React.useState([]);
   // we want to loop through all indices and grab an index array whose values are present in the odd values
   React.useEffect(() => {
      const indices = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [1, 4, 7],
         [2, 5, 8],
         [3, 6, 9],
         [1, 5, 9],
         [7, 5, 3],
      ];
      let results = indices.reduce((acc, curr) => {
         if (curr.every((e) => oddValues.includes(e))) {
            acc.push(curr);
         }
         if (curr.every((e) => evenValues.includes(e))) {
            acc.push(curr);
         }
         return acc;
      }, []);

      setResults([...results]);
   }, [clickedCards.length]);

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
            <>
               <div className="all-cards-container">{allCards}</div>
               <Winner />
            </>
         )}
      </div>
   );
}

export default App;
