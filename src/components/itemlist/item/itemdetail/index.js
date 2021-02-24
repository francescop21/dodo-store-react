import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useCartContext } from '../../../../context/cartContext';
import ItemCount from './itemcount';
import './itemdetail.css';

const ItemDetail = ({item}) => {
    
    const { addItem } = useCartContext();
    const [quantity, setQuantity] = useState(1);
    const [isAdd, setIsAdd] = useState(false);

    const history = useHistory();

    const inc = () => {
        if (quantity < item.stock) {
            setQuantity(quantity + 1);
        }
    }

    const dec = () => {
        if (quantity > 0 ) {
            setQuantity(quantity - 1);
        }
    }

    const onAddToCart = () => {
        addItem(item, quantity); //add item to cartContext
        setQuantity(1);
        setIsAdd(true);
    }

    return (
        <>
        <div className="col-md-6 photo-container">
            <img className='photo img-fluid' src={item.photo} alt={item.title}></img>
        </div>
        <div className="col-md-6 item-detail">
            <div className='h-100'>
                {item.stock < 10 &&
                    <div className="position-absolute bg-danger px-2 py-1 rounded" style={{ "right": "0" }}>
                        <span className="text-white">¡Últimas unidades!</span>
                    </div>
                }
                <h5 className='card-title'>{item.title}</h5>
                <div className='card-text'>
                    <span className='categories'>{item.category} + {item.type}</span>
                    <hr/>
                    <span className='price'>$ {item.price}</span>
                    <hr/>
                    <span className='stock'><b>Disponibles:</b> {item.stock} {item.stock > 1 ? "unidades disponibles" : "última unidad disponible"}.</span>
                    <hr/>
                    <div className="item-actions">
                        { !isAdd ? 
                            <>
                                <ItemCount stock={item.stock} quantity={quantity} inc={inc} dec={dec} />
                                <button className='btn btn-success btn-add-to-cart' title="Agregar al carrito" disabled={!(item.stock > 0)} onClick={onAddToCart}>
                                    <i className='fas fa-cart-plus'></i>
                                </button>
                            </>
                        : 
                            <button className="btn btn-success btn-finish" onClick={()=>history.push('/cart')}>
                                <i className="fas fa-shopping-bag"></i> Terminar mi compra
                            </button>
                        }
                    </div>
                </div>                
            </div>
        </div>
        <div className="col-md-12 item-data mt-2">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Descripción</a>
                </li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;