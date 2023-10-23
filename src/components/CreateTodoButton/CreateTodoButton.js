import React, { useState } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../TodoContext/TodoContext';

function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setOpenModal(prevState => !prevState);
    setRotate(!rotate);
  };

  return (
    <div className="button-container">
      <div className="shadow"></div>
      <button
        className={`create-button ${rotate ? 'rotate' : ''}`}
        onClick={handleClick}
      ><span className='letter'>+</span></button>
    </div>
  );
}

export { CreateTodoButton };