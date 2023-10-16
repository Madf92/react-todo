import React from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { AiFillCloseSquare } from 'react-icons/ai';
import './TodoItem.css'

function TodoItem({ text, completed, onMark, onDelete}) {
    return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onMark}
      >
        {completed ? <ImCheckboxChecked/> : <ImCheckboxUnchecked />}
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
      {text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        <AiFillCloseSquare/>
      </span>
    </li>
    );
  }


    export {TodoItem};