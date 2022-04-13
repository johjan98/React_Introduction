import React from "react";
import './CreateTodoButton.css';

export function CreateTodoButton({ openModal, setOpenModal}){

  const onClickButton = () =>{
    setOpenModal(!openModal);
  }

  return(
    <button 
      className="add-todo" 
      onClick={onClickButton}
    >
      +
    </button>
  )
}