import React from "react";
import './TodoCounter.css';

export function TodoCounter({completedTodos, totalTodos, loading}){
  return (
    <h2 
      className={`title ${!!loading && 'title--loading'}`}
    >
      Has competado {completedTodos} de {totalTodos} TODOs
    </h2>
  )
}