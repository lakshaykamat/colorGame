import {useContext} from "react";
import { GameContext } from "../Context";
import { tailwindStyle } from "../../styles";
export default function Form(props) {
  const {darkMode, rounds} = useContext(GameContext);
  const helpIcon = (<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
    className="w-8">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
    />
  </svg>)
  return (
    <>
    <div className={tailwindStyle.form.helpIcon}>{helpIcon}</div>
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
        className={darkMode ? tailwindStyle.form.buttonDark : tailwindStyle.form.button}
        onClick={props.handleSubmit}>Start game
        </button>
      </div>
    </form>
    </>
  );
}
