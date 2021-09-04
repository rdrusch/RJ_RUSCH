import React, { useContext, useEffect, useState } from "react"
import "./itemDetailContainer.scss"
import { useParams } from "react-router-dom"
import { cargarDatos } from "../../helpers/cargarDatos"
import { ItemDetail } from "./ItemDetail"
import { UIContext } from "../../context/UIContext"


export const ItemDetailContainer = () => {


    const { loading, setLoading } = useContext(UIContext)

    const { itemId } = useParams()

    const [item, setItem] = useState(null)



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