import React from 'react';
import "./estilos.scss"
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Hola Coders!"} bienvenida={"Bienvenidos a Alkimia"} />
    </div>
  );
}

export default App;
