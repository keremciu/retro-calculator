export default function(state, key) {
  const entryKey = state.nextEntry !== null ? "nextEntry" : "currentEntry";
  switch (key.value) {
    case "sqrt":
      const isNegative = Math.sign(state[entryKey]) === -1;
      return {
        ...state,
        [entryKey]: isNegative ?
          (Math.sqrt(Math.abs(state[entryKey])) * -1)
          :
          Math.sqrt(state[entryKey])
      };

    case "change_sign":
      return {
        ...state,
        [entryKey]: state[entryKey] * -1
      };

    case "float":
      if (String(state[entryKey]).indexOf('.') > -1) {
        return state;
      }

      return {
        ...state,
        [entryKey]: `${state[entryKey]}.`,
        float: true
      };

    default:
      return state;
  }
}
