export default function(state, key) {
  const { currentEntry, nextEntry } = state;
  const { value } = key;

  if (currentEntry === null) {
    return state;
  }

  if (key.value === "perform") {
    let calculateState = { ...state };
    if (state.lastAction === "perform") {
      calculateState = {
        ...state,
        ...state.lastCalculation
      };
    }
    const calculatedValue = calculate(calculateState);
    return {
      ...state,
      operation: null,
      float: false,
      nextEntry: null,
      currentEntry: calculatedValue,
      lastAction: "perform",
      lastCalculation: {
        operation: calculateState.operation,
        nextEntry: calculateState.nextEntry
      }
    };
  }

  if (nextEntry === null) {
    return {
      ...state,
      operation: value
    };
  }

  let calculatedValue;

  if (key.value === 'percentage') {
    calculatedValue = calculate({
      ...state,
      operation: key.value
    });
  } else {
    calculatedValue = calculate(state);
  }

  return {
    ...state,
    float: false,
    operation: null,
    nextEntry: null,
    currentEntry: calculatedValue,
  };
}

export function calculate(state) {
  const { currentEntry, nextEntry, operation } = state;
  switch (operation) {
    case "plus":
      return Number(currentEntry) + Number(nextEntry);

    case "minus":
      return Number(currentEntry) - Number(nextEntry);

    case "multiply":
      return Number(currentEntry) * Number(nextEntry);

    case "divide":
      return Number(currentEntry) / Number(nextEntry);

    case "percentage":
      return Number(currentEntry) / 100 * Number(nextEntry);

    default:
      return 0;
  }
}
