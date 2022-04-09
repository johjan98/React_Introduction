import React from "react";
import './TodoCounter.css';

export function TodoCounter({completed, total}){
  return (
    <h2 className="title">Has competado {completed} de {total} TODOs</h2>
  )
}