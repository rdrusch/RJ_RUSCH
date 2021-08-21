import React from "react"
import "./ItemListContainer.scss"

export const Item = ({ codigo, imagen, producto, peso, precio }) => {

    return (

        <div className="cards" >
            <img src={imagen} alt={producto} />
            <h3>{producto}</h3>
            <p>Contiene {peso}</p>
            <p className="precioProducto">{precio}</p>
        </div>

    )
}