import React from 'react';
import "./NavBar.scss"
import { IconoCarrito } from './IconoCarrito';

export const NavBar = () => {
    return (
        <header className="headerApp">
            <h2>Alkimia</h2>
            <nav className="navBar">
                <ul>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <IconoCarrito />
        </header>
    )
}