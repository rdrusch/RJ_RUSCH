import React from "react"
import { Link } from "react-router-dom"

export const Counter = ({ max, cantidad, setCantidad, agregar, agregado }) => {



    const handleSumar = () => {
        if (cantidad < max) {
            setCantidad(cantidad + 1)
        }
    }

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            <button onClick={handleRestar} className="btnMasMenos">-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar} className="btnMasMenos">+</button>
            <div className="botonesProducto">
                {
                    agregado
                        ? <Link to="/carrito"><button className="botonProducto finalizarCompra">Finalizar compra</button></Link>
                        : <button className="botonProducto agregarCarrito" onClick={agregar}>Agregar al carrito</button>
                }

                <Link to="/" ><button className="botonProducto comprarProducto">Seguir comprando</button></Link>
            </div>
        </div>
    )
}