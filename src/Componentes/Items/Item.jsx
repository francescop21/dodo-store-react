import React, { useEffect, useState } from 'react';
import Counter from '../Contador/ItemCount.jsx'

const Item = (props) => {

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(loading)

    useEffect(() => {
        setList(props.array.drinks)
        setLoading(false)
    }, [props])


    return (
        <Counter array={list} initial="0" min="0" max="10" />
    )

}

export default Item;