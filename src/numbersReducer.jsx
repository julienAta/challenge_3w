export default function numbersReducer(state, action) {
  switch (action.type) {
    case "ADD_NUMBER":
      if (state.numbers.length < state.maxNumbers) {
        const newNumber = Math.floor(Math.random() * 30) + 1;
        if (!state.numbers.includes(newNumber)) {
          return { ...state, numbers: [...state.numbers, newNumber] };
        }
      }
      return state;
    case "GENERATE_PAIRS":
      let tempPairs = [];
      for (let i = 0; i < state.numbers.length; i += 2) {
        tempPairs.push(state.numbers.slice(i, i + 2));
      }
      return { ...state, pairs: tempPairs };
    case "CLEAR":
      return { ...state, numbers: [], pairs: [] };
    default:
      return state;
  }
}
