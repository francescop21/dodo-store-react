import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import data from './data';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import Catalog from './Componentes/Catalog';
import Navbar from './Componentes/Navbar';

function App() {

  return (

<BrowserRouter>    
<div className="grid-container">
        <Navbar></Navbar>
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
