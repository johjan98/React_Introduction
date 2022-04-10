import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

export function TodoForm(){

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const onChange = (event)=>{
    setNewTodoValue(event.target.value);
  }

  const onCancel = ()=>{
    setOpenModal(false);
  }

  const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false)
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <label className="label">Ahora puedes agregar un nuevo TODO</label>
      <textarea 
        placeholder="Ingrese TODO"
        value={newTodoValue} 
        onChange={onChange}
        className="text-input"
      />    
      <div className="buttons">
        <button 
          type="submit"
          className="submit-button"
        >
          Añadir
        </button>
        <button 
          onClick={onCancel}
          className="cancel-button"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}