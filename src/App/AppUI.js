import React from 'react'

import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoLoading } from '../components/TodoLoading/TodoLoading';
import { TodoEmpty } from '../components/TodoEmpty/TodoEmpty';
import { TodoError } from '../components/TodoError/TodoError';
import { Modal } from '../components/Modal/Modal';
import { TodoForm } from '../components/TodoForm/TodoForm';

import { TodoContext } from '../TodoContext/TodoContext';

function AppUI (){
    const {
        loading,
        error,
        searchedTodos,
        onMarkEvent,
        onDeleteEvent,
        searchValue,
        openModal,
     } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                {loading && <TodoLoading/>}
                {error && <TodoError />}
                {(!loading && !searchedTodos.length) && <TodoEmpty searchValue={searchValue}/>}
                {searchedTodos.map(todo => (
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

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )
            }
        </>
    );
}

export { AppUI };