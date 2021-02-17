import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';


function Catalog(props) {
  console.log(props.match.params.id)  
  const product = data.products.find(x => x._id === props.match.params.id);

  function onClick(evt) {
      console.log('Clicked')
  }

  return <div>
      <div className="back-home">
          <Link to="/">Volver</Link>
      </div>
      <div className="details"></div>
        <div className="details-image">
            <img src={product.image} alt="product" ></img>
        </div>
        <div className="details-info">
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    {product.rating} Reviews ({product.numReviews})
                </li>
                <li>
                   Precio: <b> {product.price} </b>
                </li>
                <li>
                    Dificultad: 
                    <div>
                        {product.description}
                    </div>
                </li>
            </ul>
        </div>
        <div className="details-action">
    <ul>
        <li>
            Price: {product.price}

        </li>
        <li>
            Status: {product.status}
            
        </li>
        <li>
            Cantidad: <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </li>
        <li>
            <button onClick={onClick} className="button">Añadir al carrito</button>
    
        </li>
    </ul>
    </div>
  </div>

}

export default Catalog; 