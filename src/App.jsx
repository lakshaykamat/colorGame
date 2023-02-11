 import React from "react";
import Form from "./Components/Home/Form";
import Game from "./Components/Game/Game";
import Result from "./Components/EndScreen/Result";
import { GameContext } from "./Components/Context";
export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [rounds, setRounds] = React.useState(5);
  const [colorModel,setColorModel] = React.useState('rgb')
  const [gameState, setGameState] = React.useState('home')
  function handleChange(event) {
    setRounds(event.target.value);
  }
  function handleColorModel(event){
    setColorModel(event.target.value)
  }
  function handleSubmit(){
    setGameState('game')
  }
  return (
    <>
    <GameContext.Provider value={{gameState,setGameState, rounds,setRounds,colorModel,setColorModel}}>
      {gameState === "home" && <Form 
      handleChange={handleChange} 
      handleSubmit={handleSubmit}
      handleColorModel={handleColorModel}
      colorModel={colorModel}/>}
      {gameState === "game" && <Game/>}
      {gameState === "endscreen" && <Result/>}
    </GameContext.Provider>
    </>
  );
}
