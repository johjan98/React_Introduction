import React from "react";
import './TodoList.css';

export function TodoList(props){

  const renderFunc = props.render || props.children;

  return(
    <section className="items">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText) }

      <ul className="items-list">
        {props.children}
      </ul>
    </section>
  )
}