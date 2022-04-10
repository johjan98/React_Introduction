import React from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

// const [searchValue, setSearchValue] = React.useState(); //De esta forma se puede mantener un estado. El valor está en la posición 0 del array y en la posición 1 se encuentra una función para cambiar el valor del estado.

export function TodoSearch (){

  const {searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <input 
      className="input-search" 
      placeholder="Buscar Tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  )
}