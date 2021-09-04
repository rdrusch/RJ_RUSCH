import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs"
import "./cartScreen.scss"

export const CartScreen = () => {

    const { carrito, eliminarDelCarrito, vaciarCarrito } = useContext(CartContext)

    return (
        <div>
            <h2>Resumen de compra</h2>

            {carrito.map(prod => (
                <div className="contenedorProdCarrito" key={prod.codigo}>
                    <h3> {prod.producto} </h3>
                    <p>Cantidad: {prod.cantidad} </p>
                    <p>Precio: ${prod.precio * prod.cantidad} </p>
                    <p>Cod: {prod.codigo} </p>
                    <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.codigo)} />
                </div>
            ))}

            <button className="vaciarCarritoBoton" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}