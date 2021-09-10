import { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    //agregar al carrito

    const agregarAlCarrito = (prod) => {

        setCarrito([
            ...carrito,
            prod
        ])
    }

    //eliminar del carrito

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(prod => prod.codigo !== id))
    }

    //cantidad de productos en el carrito

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    //total $ de productos en el carrito

    const precioCarrito = () => {
        return carrito.reduce((acc, prod) => acc + (prod.cantidad * prod.precio), 0)
    }

    //vaciar carrito

    const vaciarCarrito = () => {
        setCarrito([])
    }

    //producto existe en carrito

    const isInCart = (id) => {
        return carrito.some(prod => prod.codigo === id)
    }



    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito, isInCart, precioCarrito }}>
            {children}
        </CartContext.Provider>
    )
}