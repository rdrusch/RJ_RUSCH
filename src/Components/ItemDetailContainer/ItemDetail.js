import React from "react"

export const ItemDetail = ({ producto, precio, categoria, imagen, peso, codigo, desc }) => {
    return (
        <div className="contenedorDetalleProducto">
            <div className="contenedorImg">
                <img src={`/img/${imagen}`} className="fotoProducto" alt={producto} />
            </div>
            <div className="contenedorDatosProducto">
                <h3 className="categoriaProducto"> {`Categoría: ${categoria}`} </h3>
                <h2 className="tituloProducto"> {producto} </h2>
                <div className="detallesProducto">
                    <h4 className="precioProducto"> {precio} </h4>
                    <p className="descProducto"> {desc} </p>
                    <p className="pesoProducto"> {`Contiene: ${peso}`} </p>
                </div>

                <div className="botonesProducto">
                    <button className="botonProducto agregarCarrito">Agregar al carrito</button>
                    <button className="botonProducto comprarProducto">Comprar</button>
                </div>
            </div>
        </div>
    )
}