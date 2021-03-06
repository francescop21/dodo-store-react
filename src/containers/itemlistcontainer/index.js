import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/itemlist';
import { productos } from '../../data/productos';
import './itemlistcontainer.css';

const ItemListContainer = () => {

    const [ items, setItems ] = useState([]);
    const [ categoryTitle, setcategoryTitle ] = useState();
    const [ isLoading, setIsLoading ] = useState();
    const { categoryId } = useParams();
    
    useEffect(() => {
        setIsLoading(true);
        const query = new Promise((resolve, reject) => {
            resolve(productos);
        });

        const timeout = setTimeout( () => { 
            query
            .then( (res) => { 
                setItems(res);
                if (categoryId) {
                    let productsfiltered = res.filter( product => product.category.toLowerCase() === categoryId.toLowerCase());
                    setItems(productsfiltered);
                    let title = productsfiltered[0].category;
                    setcategoryTitle(title);
                }
                else {
                    setItems(res);
                }
                setIsLoading(false);
            })
            .catch( (err) => console.log(err))
        }, 2000);

        return () => clearTimeout(timeout);
    }, [categoryId]);

    if (isLoading)
    {
        return (
            <div className="list-items mt-2 d-flex flex-wrap">
                <div className="col-12 p-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="list-items mt-2 d-flex flex-wrap">
            { categoryId && categoryId > 0 &&
                <div className="col-12">
                    <h2>{categoryTitle}</h2>
                    <hr/>
                </div>
            }
            <ItemList itemsData={items}/>
        </div>
    )
}

export default ItemListContainer;