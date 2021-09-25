import firebase from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "../Firebase/config";

export const generarOrden = (buyer, carrito, total) => {


    return new Promise(async (resolve, reject) => {

        const db = getFirestore()
        const orders = db.collection("orders")
        const batch = db.batch()

        const productosToUpdate = db.collection("productos")
            .where(firebase.firestore.FieldPath.documentId(), "in", carrito.map(prod => prod.codigo))

        const query = await productosToUpdate.get()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = carrito.find(elem => elem.codigo === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, { stock: doc.data().stock - itemInCart.cantidad })
            } else {
                outOfStock.push({
                    id: doc.id,
                    ...doc.data()
                })
            }
        })

        if (outOfStock === 0) {
            orders.add(newOrder)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
                .catch((err) => {
                    reject(err)
                })

        } else {
            reject({
                error: "Productos sin stock suficiente",
                sinStock: outOfStock
            })
        }





        const newOrder = {
            buyer: buyer,
            items: carrito,
            total: total,
            fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }


    })




}