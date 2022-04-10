import React from "react";
import './TodoList.css'

export function TodoList(props){
  return(
    <section className="items">
      <ul className="items-list">
        {props.children}
      </ul>
    </section>
  )
}