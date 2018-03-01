import processors from "Calculator/logic/processors";

export default function processKey(state, key) {
  return processors[key.type](state, key);
}
