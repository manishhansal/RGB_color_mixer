import { useState } from "react";
import { RgbMixer } from "./Component/rgbMixer";
import "./styles.css";

export default function App() {
  const [mode, setMode] = useState("LightMode");
  const MyDiv = {
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: mode === "LightMode" ? "white" : "black",
    width: "100%",
    height: "100vh",
    margin: "0px",
    padding: "0px",
    color: mode === "LightMode" ? "black" : "white"
  };
  const handleClick = () => {
    mode === "LightMode"
      ? setMode(() => "DarkMode")
      : setMode(() => "LightMode");
  };
  return (
    <div style={MyDiv}>
      <button onClick={handleClick}>{mode}</button>
      <RgbMixer props={mode} />
    </div>
  );
}
