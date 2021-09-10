import React, { useContext, useEffect, useState } from 'react';
import "./ItemListContainer.scss"
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { UIContext } from '../../context/UIContext';
import { getFirestore } from '../../Firebase/config';

export const ItemListContainer = () => {

    const { loading, setLoading } = useContext(UIContext)

    const { catId } = useParams();


    const [data, setData] = useState([])



    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const productos = db.collection('productos')

        if (catId) {
            const filtrado = productos.where('categoria', '==', catId)
            filtrado.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), codigo: doc.id }))
                    setData(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            productos.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({ ...doc.data(), codigo: doc.id }))
                    setData(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

    }, [catId, setLoading])



    return (
        <>
            {loading
                ? <h2 className="cargando">Cargando...</h2>
                : <ItemList productos={data} />
            }


        </>
    )
}
