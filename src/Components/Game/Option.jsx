import React from "react";
import { GameContext } from "../Context";
import { tailwindStyle } from "../../styles";
export default function Option(prop) {
  const classes = tailwindStyle;
  const {gameState,setGameState,rounds,setRounds,colorModel,setColorModel} = React.useContext(GameContext)
  console.log("ROUNDS"+rounds)
    function checkAns(e) {
      const usrOptions = e.target.style.backgroundColor;
      decrementRounds()
      console.log(usrOptions);
      if (prop.correctOption === usrOptions) {
        prop.incrementScore()
      }
      prop.decrementScore()
    }
    function decrementRounds(){
      setRounds((prevRound => prevRound -1))
      if(rounds==1){
        setGameState("endscreen")
      }
    }
    const optionsJSX = prop.options.map((item, i) => {
      return (
        <li 
        onClick={checkAns} 
        key={i} 
        style={{ backgroundColor: item }}
        className={classes.Game.LI}>
        </li>
      );
    });
    return (
      <>
        <ul className={classes.Game.UL}>{optionsJSX}</ul>
      </>
    );
  }
  