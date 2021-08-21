import React, { useEffect, useState } from 'react';
import "./ItemListContainer.scss"
import { cargarDatos } from '../../helpers/cargarDatos';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)

        cargarDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])



    return (
        <>
            {loading
                ? <h2>Cargando...</h2>
                : <ItemList productos={data} />
            }


        </>
    )
}
