import React from 'react';
import "./ItemListContainer.scss"

export const ItemListContainer = ({ saludo, bienvenida }) => {
    return (
        <section className="seccionBienvenidos">
            <h2>{saludo}</h2>
            <h1 className="tituloBienvenida">{bienvenida}</h1>
        </section>
    )
}
