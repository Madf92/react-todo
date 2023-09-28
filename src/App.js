import React from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoItem/CreateTodoItem';

import { defaultTodos } from './assets/defaultTodos';

function App() {
  return (
    <>
      <TodoCounter
        ClassName="Tittle"
        total={1}
        completed={0}
      />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.id}
            text={todo.title}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
