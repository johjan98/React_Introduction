import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider (props){

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);

  const [openModal, setOpenModal] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.complete).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]; //No se puede editar directamente los todos, se dbe crear un nuevo array y usar el método setTodos para realizar re-render y que la app se actualice correctamente.
    newTodos[index].complete = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) =>{
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  }

  const addTodo = (text) =>{
    const newTodos = [...todos];
    newTodos.unshift({
      text: text,
      completed: false
    });
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider value={{
      error,
      loading,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal
    }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export {TodoContext, TodoProvider};