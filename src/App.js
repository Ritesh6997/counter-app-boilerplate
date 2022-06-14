import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setConter] = useState(0);
  const handlecount = (value) => {
    if (counter === 0 && value === -1) {
      return;
    }
    setConter(prev => prev + value);
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{counter}</h2>
       <button disabled={counter===0} onClick={() => {
        handlecount(-1);
      }} data-testid="counter-decrement-button">-</button>
      <button onClick={() => {
        handlecount(1);
      }} data-testid="counter-increment-button">+</button>
    </div>
  );
}

export default App;
