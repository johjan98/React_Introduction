import React from "react";

import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";


export function AppUI(){

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div className='main-container'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <p>Ups! Algo ha fallado</p>}
          {loading && <p>Cargando, por favor espera un momento</p>}
          {(!loading && !searchedTodos.length) && <p>¡¡Crea tu primer ToDo!!</p>}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.complete}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton />
      </div>
    </React.Fragment>
  )
}