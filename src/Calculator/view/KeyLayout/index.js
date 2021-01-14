import React, { PureComponent } from "react";

import keyTypes from "Calculator/logic/config";
import keys from "./keys";
import layout from "./layout";
import "./styles.css";

class KeyLayout extends PureComponent {
  renderKey = (key, cellIndex) => (
    <div
      className={`cell ${key.extraClass} ${key.type + key.value}`}
      key={cellIndex}
    >
      {key.label && (
        <button onClick={() => key.onChange(key)} children={key.label} />
      )}
    </div>
  );

  renderCell = (cell, cellIndex) => {
    let key = {
      extraClass: "",
      onChange: this.props.onChange,
    };

    if (typeof cell === "number" || cell === "") {
      key.type = keyTypes.NUMBER;
      key.label = cell.toString();
      key.value = cell.toString();
    } else {
      const [type, value] = cell.split(".");
      const foundKey = keys.find(
        (key) => key.type === type && key.value === value
      );
      key.type = type;
      key.value = foundKey.value;
      key.label = foundKey.label;
      if (foundKey.extraClass) key.extraClass = foundKey.extraClass;
    }

    return this.renderKey(key, cellIndex);
  };

  render() {
    return (
      <div className="KeyLayout">
        {layout.map((row, rowIndex) => (
          <div className="KeyRow" key={rowIndex}>
            {row.map((cell, cellIndex) => this.renderCell(cell, cellIndex))}
          </div>
        ))}
      </div>
    );
  }
}

export default KeyLayout;
