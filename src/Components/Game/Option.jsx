import React from "react";
import { GameContext } from "../Context";
export default function Option(prop) {
  const {gameState,setGameState,rounds,setRounds} = React.useContext(GameContext)
  console.log(rounds)
    function checkAns(e) {
      const options = e.target.innerHTML;
      if (prop.correctOption === options) {
        console.log(e.target.innerHTML);
        setRounds((prevRound => prevRound -1))
        if(rounds==0){
          setGameState("endscreen")
        }
      }
    }
    const optionsJSX = prop.options.map((item, i) => {
      return (
        <li onClick={checkAns} key={i} style={{ backgroundColor: item, margin: "1px", padding: "5px" }}>
          {item}
        </li>
      );
    });
    return (
      <>
        <ul>{optionsJSX}</ul>
      </>
    );
  }
  