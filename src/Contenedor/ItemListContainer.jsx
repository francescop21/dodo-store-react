import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from '../Componentes/Contador/ItemCount.jsx';
import productList from "../mocks/productList.js"
import ItemList from "../Componentes/ItemList/ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
        const [products, setProducts] = React.useState([]);

        React.useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 3000);
    });

    myPromise.then((result ) => setProducts(result));
    }, []);

return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer; 