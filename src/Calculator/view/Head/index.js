import React, { PureComponent } from 'react';
import Logo from './casio_logo.svg';
import './styles.css';

class CalculatorHead extends PureComponent {
  render() {
    return (
      <header className="Head">
        <img src={Logo} alt="Casio Logo" />
        <div className="SolarPower">
          <div className="SolarRow">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="Slogan">TWO WAY POWER</div>
        </div>
      </header>
    );
  }
}

export default CalculatorHead;
