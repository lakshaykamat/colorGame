import {useState} from "react";
import Form from "./Components/Home/Form";
import Game from "./Components/Game/Game";
import Result from "./Components/EndScreen/Result";
import { GameContext } from "./Components/Context";
import { tailwindStyle } from "./styles";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [rounds, setRounds] = useState(5);
  const [colorModel, setColorModel] = useState("rgb");
  const [gameState, setGameState] = useState("home");
  const [score,setScore] = useState(0)
  const icon = {
    darkMode: (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>),
    lightMode:(<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>)
  }
  function handleDarkMode(){
    setDarkMode((prevMode=>!prevMode))
  }
  function handleChange(event) {
    setRounds(event.target.value);
  }
  function handleColorModel(event) {
    setColorModel(event.target.value);
  }
  function handleSubmit() {
    setGameState("game");
  }
  return (
    <div className={darkMode ? tailwindStyle.App.Dark : tailwindStyle.App.Container}>
      <div 
      className={tailwindStyle.App.toogleIcon}
      onClick={handleDarkMode}>
      {darkMode ? icon.darkMode : icon.lightMode}
        </div>

      <GameContext.Provider
        value={{
          gameState,
          setGameState,
          rounds,
          setRounds,
          colorModel,
          setColorModel,
          score,
          setScore,
          darkMode
        }}
      >
        {gameState === "home" && (
          <Form
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleColorModel={handleColorModel}
            colorModel={colorModel}
          />
        )}
        {gameState === "game" && <Game />}
        {gameState === "endscreen" && <Result />}
      </GameContext.Provider>
      </div>
  );
}
