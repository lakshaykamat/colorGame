 import React from "react";
import Form from "./Components/Home/Form";
import Game from "./Components/Game/Game";
export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [rounds, setRounds] = React.useState(3);
  function handleChange(event) {
    setRounds(event.target.value);
  }

  function createColor() {
    let rgbValue = [];
    let rgbStr = "";
    for (let i = 0; i < 3; i++) {
      rgbValue[i] = Math.floor(Math.random() * 255);
    }
    rgbStr = `rgb(${rgbValue[0]},${rgbValue[1]},${rgbValue[2]})`;
    return rgbStr;
  }
  function createOption() {
    let array = [createColor(), createColor(), createColor()];
    array.splice(Math.floor(Math.random() * 4), 0, newColor);
    return array;
  }
  let newColor = createColor();
  let options = createOption();

  return (
    <>
      <Form handleChange={handleChange} color={newColor} />
      {rounds != 0 && <Game question={newColor} options={options} />}
    </>
  );
}
