import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';


function ItemListContainer (props) {
    return <ul className="products">
    {
        data.products.map(product =>
            <li>
            <div className="product">
            <Link to={'product/' + product._id}> <img className="product-image" src={product.image} alt="product"/></Link>
                <div className="product-name">
                    <Link to={'product/' + product._id}>{product.name}</Link>
                </div>
                <div className="product-description">{product.description}</div>
                <div className="product-price">{product.price}</div>
                <div className="product-rating">{product.rating} Recomendado por {product.reviews}</div>
            </div>
        </li>)
    }

</ul>
}

export default ItemListContainer; 