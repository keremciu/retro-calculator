import { useState } from "react";
import Head from "./view/Head";
import KeyLayout from "./view/KeyLayout";
import keys from "./view/KeyLayout/keys";
import "./styles.css";

import process from "Calculator/logic/process";

export const initialState = {
  open: false,
  currentEntry: 0,
  nextEntry: null,
  operation: null,
  float: false,
  memory: null,
  automaticTurnOff: null,
  lastAction: null,
  lastCalculation: {},
};

const automaticTurnOffTime = 600000;

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const handleClick = (key) => {
    if (state.automaticTurnOff) {
      clearTimeout(state.automaticTurnOff);
    }
    setState({
      lastAction: null,
      lastCalculation: {},
      ...process(state, key),
      automaticTurnOff: setTimeout(() => {
        const turnOffKey = keys.find((k) => k.value === "off");
        setState(process(state, turnOffKey));
      }, automaticTurnOffTime),
    });
  };

  return (
    <div className="Calculator">
      <Head />
      <main>
        <div className="Screen">
          <div className="in">
            <span className="displayValue">
              {state.open ? state.nextEntry || state.currentEntry : ""}
            </span>
            {!!state.memory && (
              <span className="memorySign">
                M<div>&#x029EB;</div>E
              </span>
            )}
          </div>
        </div>
        <div className="Pad">
          <h2 className="modelText">SL-300SV</h2>
          <KeyLayout onChange={handleClick} />
        </div>
      </main>
    </div>
  );
};

export default Calculator;
