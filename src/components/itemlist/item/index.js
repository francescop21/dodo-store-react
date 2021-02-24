import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({item}) => {

    return (
        <Link to={`/item/${item.id}`} className="item">
            <div className='card rounded h-100 shadow-sm p-0'>
                <div className='card-img-top'>
                    <img className='img-fluid' src={item.photo} alt={item.title}></img>
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <p className='card-text'>
                        <span className='categories'>{item.category} + {item.type}</span>
                        <span className='price'>$ {item.price}</span>
                        <span className='stock'>{item.stock} En stock</span>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default Item;