import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import './TodoDelete.css';

export function TodoDelete ({onDelete}){
  return(
    <div>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className='icon-delete'
        onClick={onDelete}
      />
    </div>
  )
}