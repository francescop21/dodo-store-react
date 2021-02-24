import { Link } from 'react-router-dom';
import './navitems.css';

const Navitems = () => {
    return(
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/#' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Cursos
                </a>
                <div className='dropdown-menu py-0' aria-labelledby='navbarDropdown'>
                    <Link to={`/category/Fácil`} className='dropdown-item'>Fácil</Link>
                    <Link to={`/category/Avanzado`} className='dropdown-item'>Avanzados</Link>
                </div>
            </li>
        </ul>     
    );
}

export default Navitems;