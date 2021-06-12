import React, { useState } from "react";

const Form = (props) => {
  //* State para guardar la frase que el usuario ingreso
  const [state, setState] = useState("");
  //* Sirve para cambiar el valor del input cuando se ingresa la frase
  const onPhraseChangeHandler = (event) => {
    setState(event.target.value);
  };
  //* Sirve para ejecutar la funcion que setea la frase que el usuario ingreso 
  const onClickHandler = () => {
    props.setPhrase(state);
  };
  return (
    <>
      <input
        type="password"
        placeholder="Escriba su Palabra"
        value={state}
        onChange={onPhraseChangeHandler}
      />
      <input type="button" value="Start" onClick={onClickHandler} />
      <br />
    </>
  );
};

export default Form;
