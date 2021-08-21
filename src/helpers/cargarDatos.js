import { stock } from "../data/stock"

export const cargarDatos = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(stock)
        }, 2000)

    })
}
