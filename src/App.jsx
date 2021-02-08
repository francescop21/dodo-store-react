import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Componentes/Navbar/Navbar.jsx';
import Productos from './Contenedor/ItemListContainer.jsx';
import ItemDetailContainer from './Componentes/Items/ItemDetailContainer.jsx'


const App = () => {
  return (
    <>
    <NavbarComponent/>
    <Productos/>
    <ItemDetailContainer/>
    </>
  );
}

export default App;
