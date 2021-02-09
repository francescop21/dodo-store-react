import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Componentes/Navbar/Navbar.jsx';
import Productos from './Contenedor/ItemListContainer.jsx';
import ItemListContainer from './Contenedor/ItemListContainer.jsx';


const App = () => {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainer greeting="Bienvenidos a la tienda"/>
    
    </>
  );
}

export default App;
