import { useReducer } from "react";
import "./App.css";
import numbersReducer from "./numbersReducer";

const initialState = {
  numbers: [],
  pairs: [],
  maxNumbers: 10,
};

function App() {
  const [state, dispatch] = useReducer(numbersReducer, initialState);

  const addNumber = () => {
    dispatch({ type: "ADD_NUMBER" });
  };

  const generatePairs = () => {
    dispatch({ type: "GENERATE_PAIRS" });
  };

  const clearList = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <>
      <div>
        <button onClick={addNumber}>Ajouter un nombre</button>
        <button onClick={clearList}>Supprimer la liste</button>
        <div>Liste : {state.numbers.join(", ")}</div>
        <button onClick={generatePairs}>Générer les binômes</button>
        <div>
          {state.pairs.map((pair, index) => (
            <div key={index}>{pair.join(", ")}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
