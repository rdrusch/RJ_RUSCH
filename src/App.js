import React from 'react';
import "./estilos.scss"
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:catId">
            <ItemListContainer />
          </Route>
          <Route exact path="/detalle/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/nosotros">
            <h1>Nosotros</h1>
            <p>Proximamente...</p>
          </Route>
          <Route exact path="/contacto">
            <h1>Contacto</h1>
            <p>Proximamente...</p>
          </Route>
          <Route exact path="/carrito">
            <h1>Carrito</h1>
            <h2>Carrito vacío</h2>
            <p>No tienes ningún producto en tu carrito</p>
          </Route>
          <Route exact path="*">
            <Redirect to="/" />
          </Route>





        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;