import React, { useState } from 'react';
import "./NavBar.scss"
import { SubMenu } from './SubMenu';
import { IoIosArrowDown } from 'react-icons/io'
import { IconoCarrito } from './IconoCarrito';
import { Link } from 'react-router-dom';

export const NavBar = () => {

    const [subMenu, setSubMenu] = useState(false)

    const mostrarSubMenu = () => {
        { setSubMenu(!subMenu) }
    }

    return (
        <header className="headerApp">
            <h2><Link to="/" className="linkLogo">Alkimia</Link></h2>
            <nav className="navBar">
                <ul>
                    <li><Link to="/" className="linksMenu">Home</Link></li>
                    <li className="linkProductos" onClick={mostrarSubMenu}>
                        <Link to="#" className="linksMenu">Productos <IoIosArrowDown /></Link>
                        {subMenu && <SubMenu />}
                    </li>
                    <li><Link to="/nosotros" className="linksMenu">Nosotros</Link></li>
                    <li><Link to="/contacto" className="linksMenu">Contacto</Link></li>
                </ul>
            </nav>
            <Link to="/carrito"><IconoCarrito /></Link>
        </header>
    )
}