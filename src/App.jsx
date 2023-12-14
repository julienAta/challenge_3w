import { useState } from "react";

import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);
  const [pairs, setPairs] = useState([]);
  const maxNumbers = 10;

  const addNumber = () => {
    if (numbers.length < maxNumbers) {
      const newNumber = Math.floor(Math.random() * 30) + 1;
      if (!numbers.includes(newNumber)) {
        setNumbers([...numbers, newNumber]);
      }
    } else {
      alert("La liste a atteint son maximum");
    }
  };

  const generatePairs = () => {
    let tempPairs = [];
    for (let i = 0; i < numbers.length; i += 2) {
      tempPairs.push(numbers.slice(i, i + 2));
    }
    setPairs(tempPairs);
  };

  const clearList = () => {
    setNumbers([]);
    setPairs([]);
  };

  return (
    <>
      <div>
        <button onClick={addNumber}>Ajouter un nombre</button>
        <button onClick={clearList}>Supprimer la liste</button>
        <div>Liste : {numbers.join(", ")}</div>
        <button onClick={generatePairs}>Générer les binômes</button>
        <div>
          {pairs.map((pair, index) => (
            <div key={index}>{pair.join(", ")}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
