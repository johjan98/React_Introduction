import React from 'react';
import './App.css';

import { useTodos } from "./useTodos";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoHeader } from "../TodoHeader";
import { EmptyTodos } from '../EmptyTodos';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function App() {  

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos, 
    totalTodos, 
    searchValue, 
    setSearchValue, 
    addTodo, 
    setOpenModal
  } = useTodos();

  return (
    <React.Fragment>
      <div className='main-container'>
        <TodoHeader loading={loading}>
          <TodoCounter 
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            // loading={loading}
          />
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            // loading={loading}
          />
        </TodoHeader>

        {/* Haciendo uso de render props */}
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}

          onError={()=> <TodoError/>}
          onLoading={()=> <TodoLoading/>}
          onEmptyTodos={()=> <EmptyTodos/>}
          onEmptySearchResults={
            (searchText) => <p>No hay resultados para {searchText}</p>
          }
          // render={todo => (
          //   <TodoItem
          //     key={todo.text}
          //     text={todo.text}
          //     completed={todo.complete}
          //     onComplete={()=>completeTodo(todo.text)}
          //     onDelete={()=>deleteTodo(todo.text)}
          //   />
          // )}
        >
          {todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.complete}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          )}
        </TodoList>
        
        {/* <TodoList>
          {error && <TodoError/>}
          {loading && <TodoLoading/>}
          {(!loading && !searchedTodos.length) && <EmptyTodos/>}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.complete}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          ))}
        </TodoList> */}

        {!!openModal && (
          <Modal>
            <TodoForm 
              addTodo={addTodo}
              setOpenModal={setOpenModal}
            />
          </Modal>
        )}
        <CreateTodoButton 
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </React.Fragment>
  )
}

export default App;
