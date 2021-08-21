import React from "react"
import "./ItemListContainer.scss"
import { Item } from "./item"

export const ItemList = ({ productos }) => {

    return (
        <section className="seccionProductos">
            <div className="contenedorCards">

                {productos.map((prod) => <Item key={prod.codigo} {...prod} />)}
            </div>
        </section>
    )


}