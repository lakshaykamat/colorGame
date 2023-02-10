import React from "react";
import { GameContext } from "../Context";
export default function Form(props){
  const {gameState,setGameState} = React.useContext(GameContext)

    const stylingObject = {
      form: {
        backgroundColor: props.color,
        border: "1px solid red"
      }
    }
    return(
    <form>
    <div className="item">
      {/*Drop Down*/}
      <label htmlFor='range'>Rounds:</label>
      <input
      id='range'
      type="range"
      min="3"
      defaultValue='5'
      max="10"
      onChange={props.handleChange}
      />
      </div>
      <button type="submit" onClick={props.handleSubmit}>Start game</button>
    </form>
    )
  }