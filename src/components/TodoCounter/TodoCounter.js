import React from 'react';

import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos: total, completedTodos: completed, loading: isLoading } = React.useContext(TodoContext);
    return (
      isLoading ?<h2 className="title">
      loading TODO's...
      </h2> :
      <h2 className="title">
        You have completed <span>{completed}</span> of <span>{total}</span> TODO's
      </h2>
    );
  }

    export {TodoCounter};