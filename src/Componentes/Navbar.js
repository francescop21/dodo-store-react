import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css'

function Navbar() {

    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }
    return (
        <div>
            <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Dodo Shop</Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Carrito</a>
            <a href="login.htnl">Ingresar</a>
        </div>
        </header>
            <aside className="sidebar">
                <h3>Categorías</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul>
                    <li>
                        <a href="index.html>">Introductorios</a>
                    </li>
                    <li>
                        <a href="index.html>">Dificultad media</a>
                    </li>
                    <li>
                        <a href="index.html>">Avanzados</a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Navbar; 

