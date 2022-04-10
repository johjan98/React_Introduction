import React from "react";
import './TodoItem.css';
import { TodoCheck } from "../TodoCheck";
import { TodoDelete } from "../TodoDelete";

export function TodoItem({text, completed, onComplete, onDelete}){

  return (
    <li className="item">
      <TodoCheck
        completed={completed}
        onComplete={onComplete}
      />
      <p 
        className={`text-item ${completed && 'text-item--completed'}`}
      >
        {text}
      </p>
      <TodoDelete
        onDelete={onDelete}
      />
    </li>
  )
}