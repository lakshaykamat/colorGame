import React from "react";
import { GameContext } from "../Context";
import { tailwindStyle } from "../../styles";
export default function Option(prop) {
  const {colorModel} = React.useContext(GameContext)
    function checkAns(e) {
      prop.decrementRounds()
      const usrOptions = e.target.style.backgroundColor;
      if((colorModel === 'rgb' ? prop.correctOption : prop.hexToRgb(prop.correctOption)) === usrOptions){
        prop.incrementScore()
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
        className={tailwindStyle.Game.LI}></li>
      );
    });
    return (
      <>
        <ul className={tailwindStyle.Game.UL}>{optionsJSX}</ul>
      </>
    );
  }
  