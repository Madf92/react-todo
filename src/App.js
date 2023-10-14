import React from 'react';

import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';

import { defaultTodos } from './assets/defaultTodos';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {
          searchedTodos.length === 0 ? <p>Ups! There's Not TODOs!</p>
          :
          searchedTodos.map(todo => (
            <TodoItem 
              key={todo.id}
              text={todo.title}
              completed={todo.completed}
            />
          ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;