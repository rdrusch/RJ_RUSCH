import firebase from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "../Firebase/config";

export const generarOrden = (buyer, carrito, total) => {


    return new Promise((resolve, reject) => {

        const db = getFirestore()
        const orders = db.collection("orders")


        const newOrder = {
            buyer: buyer,
            items: carrito,
            total: total,
            fecha: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(newOrder)
            .then((res) => {
                resolve(res.id)
            })
            .catch((err) => {
                reject(err)
            })

    })




}