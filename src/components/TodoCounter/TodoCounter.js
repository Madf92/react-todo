import React from 'react';

import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos: total, completedTodos: completed, loading: isLoading } = React.useContext(TodoContext);
    return (
      isLoading ?<h2 className="tittle">
      loading TODO's...
      </h2> :
      <h2 className="tittle">
        You have completed <span>{completed}</span> of <span>{total}</span> TODO's
      </h2>
    );
  }

    export {TodoCounter};