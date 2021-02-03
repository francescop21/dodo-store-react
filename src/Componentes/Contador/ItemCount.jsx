import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

const Counter = (props) => {

    const [count, setCount] = useState(0);

    const onAdd = (sign) => {
        if (sign === "Agregar" && count < props.max) setCount(count + 1)
        if (sign === "Quitar" && count > props.min) setCount(count - 1)
    }
    return (
        <div className="container">
            <div className="card col-3">
                <div className="card-body">
                    Agregar productos
                </div>
                <div className="row">
                    <button class="btn btn-danger" title='Down' onClick={() => onAdd("Quitar")}><span role="img" aria-label="Minus">Quitar</span></button>
                    <input  type="text" placeholder="0" value={count} />
                    <button class="btn btn-primary" title='Up' disabled={count===props.max} onClick={() => onAdd("Agregar")}><span role="img" aria-label="Plus">Agregar</span></button>
                </div>
            </div>
        </div>
    );
};

export default Counter;