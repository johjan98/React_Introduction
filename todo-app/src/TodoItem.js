import React from "react";
import './TodoItem.css';

export function TodoItem({text, completed, onComplete, onDelete}){

  return (
    <li className="item">
      <span 
        className={`check-item ${completed && 'check-item--active'}`} 
        onClick={onComplete}
      >
        ✔
      </span>

      <p 
        className={`text-item ${completed && 'text-item--completed'}`}
      >
        {text}
      </p>

      <span 
        className="delete-item" 
        onClick={onDelete}
      >
        X
      </span>

    </li>
  )
}