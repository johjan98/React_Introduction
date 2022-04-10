import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

export function CreateTodoButton(){

  const { openModal, setOpenModal} = React.useContext(TodoContext);

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