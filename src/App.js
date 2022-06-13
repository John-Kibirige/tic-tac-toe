import "./App.css";
import Card from "./components/Card";
import PreCard from "./components/PreCard";
import React from "react";
import Winner from "./components/Winner";

function App() {
   // handle the pre-card container
   // what we can do is to use the use state hook;
   let message;
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

   // monitor the results
   const [result, setResults] = React.useState([]);

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

         // for displayed
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

   // we want to loop through all indices and grab an index array whose values are present in the odd values
   React.useEffect(() => {
      const indices = [
         [1, 2, 3],
         [4, 5, 6],
         [7, 8, 9],
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
   }, [clickedCards]);

   // handle restart button
   function handleRestart() {
      setClickedCards([]);
      setDisplayed(displayedObj);
      setOddValues([]);
      setEvenValues([]);
      setResults([]);
      setOption("");
   }

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
            winnerColor={
               result.length > 0
                  ? result[0].some((e) => e === obj.number)
                  : false
            }
            noWinner={
               result.length > 0
                  ? result[0].some((e) => e !== obj.number)
                  : false
            }
         />
      );
   });

   // working on the message
   if (result[0] && clickedCards.length >= 5) {
      let res = result[0];
      displayed.forEach((obj) => {
         if (res.includes(obj.number)) {
            message = obj.display;
         }
      });
   }

   // add styles to my App

   return (
      <div className="App">
         {option === "" && (
            <PreCard cross={clickedCross} circle={clickedCircle} />
         )}

         {option !== "" && (
            <>
               <div className="all-cards-container">{allCards}</div>
               {(result.length > 0 || clickedCards.length === 9) && (
                  <div className="overlay"></div>
               )}
               {
                  <Winner
                     winner={message || (clickedCards.length === 9 && "draw")}
                     handleClick={handleRestart}
                  />
               }
            </>
         )}
      </div>
   );
}

export default App;
