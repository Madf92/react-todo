import React from "react";

//import { defaultTodos } from '../Assets/defaultTodos';
import { useLocalStorage } from '../hooks/useLocalStorage';

//localStorage.setItem('todos_V0.1', JSON.stringify(defaultTodos));

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V0.1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()));
    const [openModal, setOpenModal] = React.useState(false);

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
    <TodoContext.Provider value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        onMarkEvent,
        onDeleteEvent,
        loading,
        error,
        openModal,
        setOpenModal,
    }}>
        {children}
    </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };