import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Ahorcado from "./components/Ahorcado/Ahorcado";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  //* state almacena la frase del usuario
  const [state, setState] = useState("");
  //* addPhraseHandler toma los datos que le envia Form y los setea al State
  const addPhraseHandler = (phrase)=>{
    setState(phrase);
  }
  return (
    <>
    {/* //* Header muestra el titulo de la App */}
      <Header />
       {/* //* Hace el cambio de pantalla cuando el usuario ingresa la frase, si no hay frase se mantiene en Form y si la hay cambia a Ahorcado */}
      {state === "" ? <Form setPhrase= {addPhraseHandler} /> : <Ahorcado />}
      {/* //*Muestra el Copyright */}
      <Footer />
    </>
  );
}

export default App;
