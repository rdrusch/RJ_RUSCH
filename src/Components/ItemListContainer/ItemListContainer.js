import React, { useContext, useEffect, useState } from 'react';
import "./ItemListContainer.scss"
import { cargarDatos } from '../../helpers/cargarDatos';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { UIContext } from '../../context/UIContext';

export const ItemListContainer = () => {

    const { loading, setLoading } = useContext(UIContext)

    const { catId } = useParams();


    const [data, setData] = useState([])



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
