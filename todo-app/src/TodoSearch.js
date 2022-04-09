import React from "react";
import './TodoSearch.css';

// const [searchValue, setSearchValue] = React.useState(); //De esta forma se puede mantener un estado. El valor está en la posición 0 del array y en la posición 1 se encuentra una función para cambiar el valor del estado.

export function TodoSearch ({searchValue, setSearchValue}){

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
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