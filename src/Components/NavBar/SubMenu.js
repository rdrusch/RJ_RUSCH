//import React from "react";
import "./NavBar.scss"
import { Link } from "react-router-dom"

export const SubMenu = () => {


    return (
        <>
            <ul className="navProductos">
                <li><Link to="/categoria/conservas" className="linkSubMenu">Conservas</Link></li>
                <li><Link to="/categoria/aceites" className="linkSubMenu">Aceites</Link></li>
                <li><Link to="/categoria/vinagres" className="linkSubMenu">Vinagres</Link></li>
                <li><Link to="/categoria/embutidos" className="linkSubMenu">Embutidos</Link></li>
                <li><Link to="/categoria/especias" className="linkSubMenu">Especias</Link></li>
                <li><Link to="/categoria/premium" className="linkSubMenu">Premuim</Link></li>
                <li><Link to="/" className="linkSubMenu allProductos">Ver todo</Link></li>
            </ul>
        </>
    )
}
