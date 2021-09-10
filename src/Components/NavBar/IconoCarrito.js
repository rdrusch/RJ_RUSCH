import { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import "./NavBar.scss"

export const IconoCarrito = () => {

    const { cantidadCarrito } = useContext(CartContext)

    return (
        <div>
            <FaShoppingCart className={cantidadCarrito() !== 0 ? "iconoCarrito" : "iconoCarritoVacio"} />
            {cantidadCarrito() !== 0
                ? <span className="cantidadCarritoNav">{cantidadCarrito()}</span>
                : ""}

        </div>

    )
}