import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs"
import "./cartScreen.scss"
import { Link } from "react-router-dom";


export const CartScreen = () => {

    const { carrito, eliminarDelCarrito, vaciarCarrito, precioCarrito } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div className="contenedorCarrito carritoVacio">
                <h2 className="tituloCarrito">No hay productos en el carrito</h2>
                <p className="carritoVacioMsj">Por favor agregue productos para continuar...</p>
                <button className="seguirComprandoBoton"><Link to="/">Ir a la tienda</Link></button>
            </div>
        )
    }
    return (
        <div className="contenedorCarrito">
            <h2 className="tituloCarrito">Resumen de compra</h2>

            {carrito.map(prod => (
                <div className="contenedorProdCarrito" key={prod.codigo}>
                    <img src={`/img/${prod.imagen}`} alt={prod.producto} />
                    <h3> {prod.producto} </h3>
                    <p>Cantidad: {prod.cantidad} u. </p>
                    <p>Precio por unidad: ${prod.precio} </p>
                    <p className="precioTotalProd">Precio total: ${prod.precio * prod.cantidad} </p>
                    <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.codigo)} />
                </div>
            ))}

            <p className="precioTotal">Total: ${precioCarrito()} </p>

            <button className="vaciarCarritoBoton" onClick={vaciarCarrito}>Vaciar carrito</button>
            <button className="seguirComprandoBoton" ><Link to="/">Seguir comprando</Link></button>
            <button className="seguirComprandoBoton" ><Link to="/Checkout">Finalizar compra</Link></button>
        </div>
    )

}