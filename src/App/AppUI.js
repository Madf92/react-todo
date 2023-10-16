import React from 'react'

import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';

function AppUI ({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    onMarkEvent,
    onDeleteEvent
}){
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

export { AppUI };