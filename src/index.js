import React, { useState } from "react";
import ReactDOM from "react-dom";

const ColorBoxApp = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h1>Color Box App</h1>
      <input type="color" value={color} onChange={handleColorChange} />
      <div
        style={{
          backgroundColor: color,
          width: "200px",
          height: "200px",
          margin: "20px",
        }}
      ></div>
    </div>
  );
};

ReactDOM.render(<ColorBoxApp />, document.getElementById("root"));