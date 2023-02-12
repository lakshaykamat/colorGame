import Option from "./Option";
import Question from "./Question";
import React from "react";
import { GameContext } from "../Context";
import { tailwindStyle } from "../../styles";
export default function Game(prop) {
  const {
    gameState,
    setGameState,
    rounds,
    setRounds,
    colorModel,
    setColorModel,
    score,
    setScore
  } = React.useContext(GameContext)

  function createColor(){
    if(colorModel=='rgb'){
      const rgbValue = [];
      let rgbStr = "";
        for (let i = 0; i < 3; i++) {
          rgbValue[i] = Math.floor(Math.random() * 255);
        }
        rgbStr = `rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`;
        return rgbStr;
    }else{
      return "#"+Math.floor(Math.random()*16777215).toString(16);
    }
  }
  function createOption(question){
    const array = [createColor(),createColor(),createColor()]
    array.splice(Math.floor(Math.random()*4),0,question)
    return array
  }
  const newQuestion = createColor()
  const options = createOption(newQuestion)
  function incrementScore(){
    setScore((prevScore => prevScore+10))
  }
  function decrementScore(){
    setScore((prevScore => prevScore-10))
  }
  return (
    <>
    <div className={tailwindStyle.Game.Container}>
      <div className={tailwindStyle.Game.textContainer}>
      <h1 className={tailwindStyle.Game.score}>Score {score}</h1>
      <h1 className={tailwindStyle.Game.rounds}>Rounds {rounds}</h1>
      </div>
      <h1 className={tailwindStyle.Game.title}>Guess the Color</h1>
      <Question question={newQuestion} />
      <Option 
      correctOption={newQuestion}
      incrementScore={incrementScore}
      decrementScore={decrementScore}
      options={options} />
    </div>
    </>
  );
}