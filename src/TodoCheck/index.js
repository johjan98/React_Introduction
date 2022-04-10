import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import './TodoCheck.css';

export function TodoCheck({completed, onComplete}){
  return (
    <div>
      <FontAwesomeIcon 
        className={`icon-check ${completed && 'icon-check--completed'}`}
        icon={faCircleCheck}
        onClick={onComplete}
      />
    </div>
  )
}