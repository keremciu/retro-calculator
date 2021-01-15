import useKeypress from "useKeypress";
import keyTypes from "Calculator/logic/config";
import keys from "./keys";
import layout from "./layout";
import "./styles.css";

const KeyLayout = ({ onChange }) => {
  useKeypress(13, () => {
    // enter runs perform
    onChange(keys[3]);
  });

  useKeypress(32, () => {
    // space opens calulator
    onChange(keys[2]);
  });

  useKeypress(187, () => {
    // plus runs sum
    onChange(keys[8]);
  });

  useKeypress(107, () => {
    // minus runs minus
    onChange(keys[7]);
  });

  useKeypress(48, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "0",
    });
  });

  useKeypress(49, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "1",
    });
  });

  useKeypress(50, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "2",
    });
  });

  useKeypress(51, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "3",
    });
  });

  useKeypress(52, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "4",
    });
  });

  useKeypress(53, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "5",
    });
  });

  useKeypress(54, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "6",
    });
  });

  useKeypress(55, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "7",
    });
  });

  useKeypress(56, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "8",
    });
  });

  useKeypress(57, () => {
    onChange({
      type: "NUMBER_FUNC",
      value: "9",
    });
  });

  const renderKey = (key, cellIndex) => (
    <div
      className={`cell ${key.extraClass} ${key.type + key.value}`}
      key={cellIndex}
    >
      {key.label && (
        <button onClick={() => key.onChange(key)} children={key.label} />
      )}
    </div>
  );

  const renderCell = (cell, cellIndex) => {
    let key = {
      extraClass: "",
      onChange: onChange,
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

    return renderKey(key, cellIndex);
  };

  return (
    <div className="KeyLayout">
      {layout.map((row, rowIndex) => (
        <div className="KeyRow" key={rowIndex}>
          {row.map((cell, cellIndex) => renderCell(cell, cellIndex))}
        </div>
      ))}
    </div>
  );
};

export default KeyLayout;
