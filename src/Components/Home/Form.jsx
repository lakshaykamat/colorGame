import {useContext} from "react";
import { GameContext } from "../Context";
import { tailwindStyle } from "../../styles";
export default function Form(props) {
  const {darkMode, rounds} = useContext(GameContext);

  return (
    <form className={tailwindStyle.form.formContainer}>
      <h1 className={tailwindStyle.form.heading}>Color Game</h1>
      <div className={tailwindStyle.form.section}>
        <label htmlFor="select">Color Model</label>
        <select
          className={tailwindStyle.form.select}
          id="select"
          onChange={props.handleColorModel}
          value={props.colorModel}>
          <option value="rgb">RGB Model</option>
          <option value="hex">Hex Model</option>
          <option value="hsl">HSL Model</option>
        </select>
      </div>

      <div 
      className={tailwindStyle.form.section}>
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

      <div className={tailwindStyle.form.section}>
        {console.log(darkMode)}
        <button
        className={`${darkMode ? tailwindStyle.form.buttonDark : tailwindStyle.form.button}`} 
        onClick={props.handleSubmit}>Start game
        </button>
      </div>
    </form>
  );
}
