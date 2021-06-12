import React, { useState, useRef, useEffect } from "react";

const Ahorcado = (props) => {
  const phraseInput = useRef();
  const [state, setState] = useState(new Array(props.phrase.length).fill(""));
  const checkLetterHandler = (event) => {
    console.log(event);
    if (event.key === "Enter") {
      const letter = event.target.value;
      let check = [...state];
      const phraseAsArray = props.phrase.split("");
      for (let i = 0; i < props.phrase.length; i++) {
        if (phraseAsArray[i] === letter) {
          check[i] = letter;
        }
      }
      setState((state) => [...check]);
      phraseInput.current.value = "";
    }
  };

  return (
    <>
      <input maxLength="1" ref={phraseInput} onKeyPress={checkLetterHandler} />
      <br/>
      {state.map(letter=><input value={letter} disabled={true} style={{width: "15px"}} />)}
    </>
  );
};

export default Ahorcado;
