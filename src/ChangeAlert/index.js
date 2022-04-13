import React from "react";
import { withStorageListener } from "./withStorageListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import './ChangeAlert.css';

function ChangeAlert({show, toggleShow}){
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

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

