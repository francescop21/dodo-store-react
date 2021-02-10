import React from "react";
import { useEffect, useState } from 'react';

const ItemListApi = () => {
const url = 'https://jsonplaceholder.typicode.com/todos'
const [todos, setTodos] = useState()
 const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
}
useEffect(() => {
  fetchApi()
}, [])

return (
    <ul>{ !todos ? 'Cargando...' : todos.map( (todo, index) => {return <li>{todo.title}</li> }) } </ul>

)
}

export default ItemListApi; 