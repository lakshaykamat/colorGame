import React from "react";
export default function Option(prop) {
    function checkAns(e) {
      let options = e.target.innerHTML;
      if (prop.correctOption === options) {
        console.log(e.target.innerHTML);
      }
    }
    let optionsJSX = prop.options.map((item, i) => {
      return (
        <li
          onClick={checkAns}
          key={i}
          style={{ backgroundColor: item, margin: "1px", padding: "5px" }}
        >
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
  