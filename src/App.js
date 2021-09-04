import React from 'react';
import "./estilos.scss"
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Footer } from "./Components/Footer/Footer"
import { CartProvider } from './context/CartContext';
import { CartScreen } from './Components/CartScreen/CartScreen';
import { UIContextProvider } from './context/UIContext';




function App() {



  return (
    <>
      <UIContextProvider>
        <CartProvider>

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
                <CartScreen />
              </Route>
              <Route exact path="*">
                <Redirect to="/" />
              </Route>
            </Switch>

            <Footer />

          </BrowserRouter>

        </CartProvider>
      </UIContextProvider>
    </>

  );
}

export default App;