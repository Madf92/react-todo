import React, { useState, useEffect } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../TodoContext/TodoContext';

function CreateTodoButton() {
  const { setOpenModal, openModal } = React.useContext(TodoContext);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setRotate(openModal);
  }, [openModal]);

  const handleClick = () => {
    setOpenModal(prevState => !prevState);
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