import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import data from './data';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import Catalog from './Componentes/Catalog';

function App() {

    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }

  return (
<BrowserRouter>     
<div className="grid-container">
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
            <main className="main">
                <div className="content">
                    <Route path="/product/:id" component={Catalog}/>
                    <Route path="/" exact={true} component={ItemListContainer}/>
                </div>
            </main>
        <footer className="footer"> Todos los derechos reservados</footer>
</div>
</BrowserRouter>
  );
}

export default App;
