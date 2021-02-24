import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import CartItem from './cartitem';
import './cart.css';

const Cart = () => {
    const { cart, clearCart } = useCartContext();

    const handleClearCart = () => {
        clearCart();
    }

    return (
        <div className="container cart-resume">
            <div className="row mt-5 mb-5 justify-content-center">
                {cart.length == 0 ?
                    <div className="col-md-12  text-center">

                        <i className="fas fa-shopping-cart fa-5x" style={{ "color": "#E8E9EB" }}></i>
                        <h4 className="my-4">No hay nada en el carrrito</h4>
                        <Link to="/" className="text-white">  <button type="button" className="btn btn-success">Ver productos</button> </Link>
                    </div>
                :
                    <div className="col-md-12">
                        <h3>Carrito</h3>
                        <table className="table product mt-3">
                            <thead>
                                <tr>
                                    <th class="product-remove">&nbsp;</th>
                                    <th class="product-thumbnail">&nbsp;</th>
                                    <th class="product-name">Elegiste el producto</th>
                                    <th class="product-price">Precio</th>
                                    <th class="product-quantity">quantity</th>
                                    <th class="product-subtotal">Resumen total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((cartItem, index) => 
                                        <CartItem cartItem={cartItem} key={index}></CartItem>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-center my-3">
                            <button className="btn btn-danger" onClick={handleClearCart}>Quitar productos</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Cart;