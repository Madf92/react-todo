import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
      <div className="button-container">
        <div className="shadow"></div>
        <button
          className="create-button"
          onClick={
            ()=> alert('Click')
          }
        >+</button>
      </div>
    );
  }

    export { CreateTodoButton };