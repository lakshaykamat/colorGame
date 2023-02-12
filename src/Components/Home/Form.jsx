import React from "react";
import { GameContext } from "../Context";
import { tailwindStyle } from "../../styles";
export default function Form(props) {
  const classes = tailwindStyle
  const { gameState, setGameState, rounds, setRounds } =
    React.useContext(GameContext);

  const stylingObject = {
    form: {
      backgroundColor: props.color,
      border: "1px solid red",
    },
  };
  return (
    <form className={classes.form.formContainer}>
      <h1 className={classes.form.heading}>Color Game</h1>
      <div className={classes.form.section}>
    
        <label htmlFor="select">Color Model</label>
        <select
          className={classes.form.select}
          id="select"
          onChange={props.handleColorModel}
          value={props.colorModel}
        >
          <option value="rgb">RGB Model</option>
          <option value="hex">Hex Model</option>
          <option value="hsl">HSL Model</option>
        </select>
      </div>

      <div 
      className={`${classes.form.section} ${classes.form.flexBoxW}`}>
        <label htmlFor="range" className="mx-2">Rounds {rounds}</label>
        <input
          id="range"
          type="range"
          min="3"
          defaultValue={rounds}
          max="10"
          onChange={props.handleChange}
        />
      </div>

      <div className={classes.form.section}>
        <button
        className={classes.form.button} 
        onClick={props.handleSubmit}>
          Start game
        </button>
      </div>
    </form>
  );
}
