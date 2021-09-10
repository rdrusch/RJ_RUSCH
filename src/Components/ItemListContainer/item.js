import React from "react"
import { Link } from "react-router-dom"
import "./ItemListContainer.scss"

export const Item = ({ codigo, imagen, producto, peso, precio }) => {


    return (
        <div className="cards" >

            <img src={`/img/${imagen}`} alt={producto} />
            <h3>{producto}</h3>
            <p>Contiene {peso}</p>
            <p className="precioProducto">${precio}</p>
            {/*<button className="botonProducto agregarCarrito" >Agregar al carrito</button>
            <button className="botonProducto comprarProducto">Comprar</button>*/}
            <Link to={`/detalle/${codigo}`} className="verMas">Ver detalle</Link>

        </div>

    )
}