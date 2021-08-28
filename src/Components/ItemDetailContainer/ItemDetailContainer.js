import React, { useEffect, useState } from "react"
import "./itemDetailContainer.scss"
import { useParams } from "react-router-dom"
import { cargarDatos } from "../../helpers/cargarDatos"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        cargarDatos()
            .then(res => {
                setItem(res.find(prod => prod.codigo === Number(itemId)))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <div>
            {loading
                ? <h2 className="cargando">Cargando...</h2>
                : <ItemDetail {...item} />}
        </div>
    )
}