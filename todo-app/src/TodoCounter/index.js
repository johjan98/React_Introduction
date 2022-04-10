import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

export function TodoCounter(){

  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
    <h2 className="title">Has competado {completedTodos} de {totalTodos} TODOs</h2>
  )
}