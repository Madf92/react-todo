import React from 'react';

import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

import './App.css';
import { defaultTodos } from '../assets/defaultTodos';
import { useLocalStorage } from '../hooks/useLocalStorage';

//localStorage.setItem('todos_V0.1', JSON.stringify(defaultTodos));


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V0.1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()));

  const onMarkEvent = (todoId) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todoItem => todoItem.id === todoId);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const onDeleteEvent = (todoId) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todoItem => todoItem.id === todoId);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

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
              onMark={() => onMarkEvent(todo.id)}
              onDelete={() => onDeleteEvent(todo.id)}
            />
          ))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;