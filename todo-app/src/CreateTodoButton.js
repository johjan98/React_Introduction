import React from "react";
import './CreateTodoButton.css';

export function CreateTodoButton(){

  const onClickButton = (msg) =>{
    window.alert(msg);
  }

  return(
    <button 
      className="add-todo" 
      onClick={() => {onClickButton('Aquí se deberá abrir el modal!!')}}
    >
      +
    </button>
  )
}