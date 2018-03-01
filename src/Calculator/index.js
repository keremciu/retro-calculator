import React, { PureComponent } from 'react';
import Head from './view/Head';
import KeyLayout from './view/KeyLayout';
import keys from './view/KeyLayout/keys';
import './styles.css';

import process from 'Calculator/logic/process';

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

class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleClick = (key) => {
    if (this.state.automaticTurnOff) {
      clearTimeout(this.state.automaticTurnOff);
    }
    this.setState({
      lastAction: null,
      lastCalculation: {},
      ...process(this.state, key),
      automaticTurnOff: setTimeout(() => {
        const turnOffKey = keys.find(k => k.value === "off");
        this.setState(process(this.state, turnOffKey));
      }, automaticTurnOffTime)
    });
  }

  render() {
    return (
      <div className="Calculator">
        <Head />
        <main>
          <div className="Screen">
            <div className="in">
              <span className="displayValue">
                {this.state.open ? this.state.nextEntry || this.state.currentEntry : ''}
              </span>
              {!!this.state.memory &&
                <span className="memorySign">
                  M
                  <div>&#x029EB;</div>
                  E
                </span>
              }
            </div>
          </div>
          <div className="Pad">
            <h2 className="modelText">SL-300SV</h2>
            <KeyLayout
              onChange={this.handleClick}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Calculator;
