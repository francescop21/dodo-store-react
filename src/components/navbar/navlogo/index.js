import { Link } from 'react-router-dom';
import './navlogo.css'

const Navlogo = () => {
    return(
        <Link to={`/`} className="navbar-brand">
            <img src='/assets/img/logo.png' className='logo' alt="Dodo"/>
        </Link>
    );
}

export default Navlogo