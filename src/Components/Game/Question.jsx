import React from "react";
import { tailwindStyle } from "../../styles";
export default function Question(prop){
  const classes = tailwindStyle
    return(
      <>
      <h1 className={classes.Game.question}>{prop.question}</h1>
      </>
    ) 
  }