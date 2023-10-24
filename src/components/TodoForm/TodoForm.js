import React from "react";

import { TodoContext } from "../../TodoContext/TodoContext";
import "./TodoForm.css";

function TodoForm () {
    const {
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo({
            title: newTodoValue,
            completed: false,
        });
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Add TODO</label>
            <textarea
            onChange={onChange}
            value={newTodoValue}
            placeholder="Add a new TODO"></textarea>
            <div className="Todo-button-wrapper">
                <button className="submit" type="submit">Add</button>
            </div>
        </form>
    )
}

export { TodoForm };