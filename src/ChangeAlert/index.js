import React from "react";
import { useStorageListener } from "./useStorageListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import './ChangeAlert.css';

export function ChangeAlert({sincronize}){

  const {show, toggleShow} = useStorageListener(sincronize);

  if(show){
    return (
      <div className={`main-container ${show && 'color'}`}>
        <div className="alert-container">
          <FontAwesomeIcon 
            icon={faTriangleExclamation}
            className='warning'
          />
          <p>Hay algunos cambios. Recarga la página!!</p>
          <FontAwesomeIcon 
            onClick={() => toggleShow(false)}
            icon={faArrowRotateRight}
            className='load-button'
          />
        </div>
      </div>      
    );
  } else {
    return null;
  }
}
