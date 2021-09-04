import React, { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Counter } from "../Counter/Counter"

export const ItemDetail = ({ producto, precio, categoria, imagen, peso, codigo, desc, stock }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAdd = () => {
        agregarAlCarrito({
            producto, cantidad, precio, categoria, imagen, peso, codigo, desc
        })
    }

    return (
        <div className="contenedorDetalleProducto">
            <div className="contenedorImg">
                <img src={`/img/${imagen}`} className="fotoProducto" alt={producto} />
            </div>
            <div className="contenedorDatosProducto">
                <h3 className="categoriaProducto"> {`Categoría: ${categoria}`} </h3>
                <h2 className="tituloProducto"> {producto} </h2>
                <div className="detallesProducto">
                    <h4 className="precioProducto"> ${precio} </h4>
                    <p className="descProducto"> {desc} </p>
                    <p className="pesoProducto"> {`Contiene: ${peso}`} </p>
                </div>

                <Counter max={stock} cantidad={cantidad} setCantidad={setCantidad} agregar={handleAdd} agregado={isInCart(codigo)} />
            </div>
        </div>
    )
}