import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Componentes/Navbar/Navbar.jsx';
import Productos from './Contenedor/ItemListContainer.jsx';
import ItemListContainer from './Contenedor/ItemListContainer.jsx';
import ItemListApi from './Contenedor/ItemListApi.jsx';
import { useEffect, useState, map } from 'react';



const App = () => {

  return (

    <div>
    <NavbarComponent/>
    <ItemListContainer greeting="Bienvenidos a la tienda"/>
    <ItemListApi/>
    </div>

  );
}

export default App;
