import React from "react";
import './TodoHeader.css';
//cloneElement: Para enviar props específicas a los hijos que tenga el componente. El problema es que sólo puede recibir un solo elemento hijo y para solucionar esto se usa React.Children.toArray..., por lo tanto, se pueden tener x cantidad de componentes hijos.
export function TodoHeader({children, loading}){
  
  return (
    <header className="header-container">
      {
        React.Children.toArray(children)
          .map(
            child => React.cloneElement(child, {loading: loading})
          )
      } 
    </header>
  )
}