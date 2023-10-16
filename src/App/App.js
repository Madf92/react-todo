import React from 'react';

import { AppUI } from './AppUI';

import './App.css';
import { defaultTodos } from '../Assets/defaultTodos';
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
  return(
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      onMarkEvent={onMarkEvent}
      onDeleteEvent={onDeleteEvent}
    />
  );
}

export default App;