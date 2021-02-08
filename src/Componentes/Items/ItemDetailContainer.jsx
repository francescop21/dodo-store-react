import React, { useState, useEffect } from 'react'
import Item from './Item'



const ItemDetailContainer = () => {

    const [list, setList] = useState([])

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=d562509dde55d2ab4a80cdcd00d904df61605745958")

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    }

    const api = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", requestOptions)
        .then(response => response.text())

    useEffect(() => {

        setTimeout(() => {
            api.then((result) => {
                const data = JSON.parse(result)
                return data

            }).then((data) => {
                setList(data)
            })

        }, 3000);

    }, [])

    return (

        <Item array={list} />

    );
};


export default ItemDetailContainer;
