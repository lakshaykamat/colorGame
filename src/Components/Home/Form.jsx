import React from "react";
import { GameContext } from "../Context";
export default function Form(props){
  const {gameState,setGameState,rounds,setRounds} = React.useContext(GameContext)

    const stylingObject = {
      form: {
        backgroundColor: props.color,
        border: "1px solid red"
      }
    }
    return(
    <form>
    <div className="item">
      <select name="" id="" onChange={props.handleColorModel} value={props.colorModel}>
        <option value="rgb">RGB Model</option>
        <option value="hex">Hex Model</option>
        <option value="hsl">HSL Model</option>
      </select>
      <label htmlFor='range'>Rounds:</label>
      <input
      id='range'
      type="range"
      min="3"
      defaultValue={rounds}
      max="10"
      onChange={props.handleChange}
      />
      </div>
      <button type="submit" onClick={props.handleSubmit}>Start game</button>
    </form>
    )
  }