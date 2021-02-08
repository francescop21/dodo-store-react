import React, { useEffect, useState } from 'react';
import Item from './Item'



const ItemList = () => {

    const [list, setList] = useState([])

    const getProducts = new Promise((res, rej) => {
        const products = [
            {
                "id": "1",
                "name": "Remera Basic",
                "color": "white",
                "price": 500
            },

            {
                "id": "2",
                "name": "Chomba Basic",
                "color": ["red", "blue", "black"],
                "price": 700
            },

            {
                "id": "3",
                "name": "Pantalon Basic",
                "color": "blue",
                "price": 1000
            }
        ]
        setTimeout(() => {
            res(products)
        }, 2000)

    })

    useEffect(() => {
        getProducts.then((resolve) => {
            setList(resolve)
        })
    }, [])


    return (
        <div>
            <Item array={list} />
        </div>
    )

}

export default ItemList;