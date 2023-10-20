import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../TodoContext/TodoContext';

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
    return (
      <div className="button-container">
        <div className="shadow"></div>
        <button
          className="create-button"
          onClick={
            ()=> {
              setOpenModal(true);
            }
          }
        >+</button>
      </div>
    );
  }

    export { CreateTodoButton };