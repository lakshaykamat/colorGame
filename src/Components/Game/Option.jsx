import React from "react";
import { GameContext } from "../Context";
import { tailwindStyle } from "../../styles";
export default function Option(prop) {
  const classes = tailwindStyle;
  const {gameState,setGameState,rounds,setRounds,colorModel,setColorModel} = React.useContext(GameContext)
    function checkAns(e) {
      prop.decrementRounds()
      const usrOptions = e.target.style.backgroundColor;
      if (prop.correctOption === usrOptions) {
        prop.incrementScore()
      }else{
        prop.decrementScore()
      }
    }
    
    const optionsJSX = prop.options.map((item, i) => {
      return (
        <li 
        onClick={checkAns} 
        key={i} 
        style={
          {
          backgroundColor: item,
          boxShadow: "5px 5px 12px 0px rgba(0,0,0,0.75)"
          }
        }
        className={classes.Game.LI}>{item}
        </li>
      );
    });
    return (
      <>
        <ul className={classes.Game.UL}>{optionsJSX}</ul>
      </>
    );
  }
  