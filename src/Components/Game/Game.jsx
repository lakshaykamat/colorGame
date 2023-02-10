import Option from "./Option";
import Question from "./Question";
import React from "react";

export default function Game(prop) {
  return (
    <>
      <Question question={prop.question} />
      <Option correctOption={prop.question} options={prop.options} />
    </>
  );
}
