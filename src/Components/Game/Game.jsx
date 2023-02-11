import Option from "./Option";
import Question from "./Question";
import React from "react";
import { GameContext } from "../Context";
export default function Game(prop) {
  const {gameState,setGameState,rounds,setRounds,colorModel,setColorModel} = React.useContext(GameContext)

  function createColor(){
    if(colorModel=='rgb'){
      const rgbValue = [];
      let rgbStr = "";
        for (let i = 0; i < 3; i++) {
          rgbValue[i] = Math.floor(Math.random() * 255);
        }
        rgbStr = `rgb(${rgbValue[0]},${rgbValue[1]},${rgbValue[2]})`;
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
  return (
    <>
      <Question question={newQuestion} />
      <Option correctOption={newQuestion} options={options} />
    </>
  );
}
