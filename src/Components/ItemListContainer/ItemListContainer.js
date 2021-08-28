import React, { useEffect, useState } from 'react';
import "./ItemListContainer.scss"
import { cargarDatos } from '../../helpers/cargarDatos';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const { catId } = useParams();


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)

        cargarDatos()
            .then(res => {

                if (catId) {
                    const prodFiltrados = res.filter(prod => prod.categoria === catId)
                    setData(prodFiltrados)
                } else {
                    setData(res)
                }


            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [catId])



    return (
        <>
            {loading
                ? <h2 className="cargando">Cargando...</h2>
                : <ItemList productos={data} />
            }


        </>
    )
}
