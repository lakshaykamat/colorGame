import React from "react";
import { tailwindStyle } from "../../styles";
export default function Question(prop){
  const classes = tailwindStyle
    return(
      <>
      <h1 className={classes.Game.question} style={{textShadow:"4px 5px 6px rgba(28,28,28,0.47)"}}>{prop.question}</h1>
      </>
    ) 
  }