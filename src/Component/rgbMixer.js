import { useState } from "react";

export const RgbMixer = ({ mode }) => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [error, setError] = useState(false);

  const handleRed = (e) => {
    let value = e.target.value;
    if (value >= 0 && value <= 255) {
      setRed(() => e.target.value);
    } else {
      setError(() => !error);
    }
  };

  const handleGreen = (e) => {
    let value = e.target.value;
    if (value >= 0 && value <= 255) {
      setGreen(() => e.target.value);
    } else {
      setError(() => !error);
    }
  };

  const handleBlue = (e) => {
    let value = e.target.value;
    if (value >= 0 && value <= 255) {
      setBlue(() => e.target.value);
    } else {
      setError(() => !error);
    }
  };

  const myResultDiv = {
    width: "200px",
    height: "200px",
    border: mode === "LightMode" ? "2px solid black" : "2px solid white",
    borderRadius: "50%",
    marginTop: "20px",
    marginLeft: "30%",
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };
  return (
    <>
      <h1>RGB Color Mixer</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Red</h3>
        <h3>Green</h3>
        <h3>Blue</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input type="number" value={red} onChange={handleRed} />
        <input type="number" value={green} onChange={handleGreen} />
        <input type="number" value={blue} onChange={handleBlue} />
      </div>
      {error ? (
        <div>
          <h1>Error</h1>
        </div>
      ) : null}
      <div style={myResultDiv}></div>
    </>
  );
};
