import React from "react";
export default function Form(props){
    const stylingObject = {
      form: {
        backgroundColor: props.color,
        border: "1px solid red"
      }
    }
    return(
    <form style={stylingObject.form}>
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
      <button>Start game</button>
    </form>
    )
  }