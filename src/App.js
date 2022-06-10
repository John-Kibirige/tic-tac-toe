import "./App.css";
import Card from "./components/Card";

function App() {
   const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

   const allCards = cardNumbers.map((Number) => {
      return <Card key={Number} cardNumber={Number} />;
   });

   return <div className="App">{allCards}</div>;
}

export default App;
