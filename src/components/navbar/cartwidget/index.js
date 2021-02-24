import { useCartContext } from '../../../context/cartContext';
import { Link } from 'react-router-dom';
import './cartwidget.css';

const Cartwidget = () => {
    const { cart } = useCartContext();
    return(
        <ul className='header-icons'>
            <li className='header-icon cart' data-toggle='tooltip' data-title='Shopping Cart' data-original-title='' title=''>
                <Link to={'/cart'}>
                    <i className='cart-icon fas fa-shopping-cart'></i>
                    <span className='cart-counter'>{cart.length}</span>
                    <span className='cart-amount'>$ {cart.totalPrice}</span>
                </Link>
            </li>            
        </ul>
    );
}

export default Cartwidget;