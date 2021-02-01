import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Componentes/Navbar/Navbar.jsx';
import Productos from './Contenedor/ItemListContainer.jsx';


const App = () => {
  return (
    <>
    <NavbarComponent/>
    <Productos/>
    </>
  );
}

export default App;
