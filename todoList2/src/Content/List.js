import React from 'react'
import {useTodo} from "../Context/TodoContext"
import { AiFillDelete } from "react-icons/ai";
let filtered = null;
const List = () => {

    const {todos, toggleTodo, deleteTodo, filter} = useTodo();
    filtered = todos;

    if (filter !== "all") {
        filtered = todos.filter(todo => filter === "active" ? todo.completed === false : todo.completed === true);
    }

    const onChange = id => toggleTodo(id);
    const onDelete = id => deleteTodo(id);

    return (
        <ul className="todoList">
            {
                filtered.map((todo) => (
                    <li key={todo.id} className= {todo.completed ? "completed" : ""}>
                        <div className="view">
                            <input 
                            className="toggle" 
                            type="checkbox" 
                            checked = {todo.completed}
                            onChange = {() => onChange(todo.id)}/>
                            <label>{todo.text}</label>
                            <AiFillDelete className="delete" onClick={() => onDelete(todo.id)} />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default List;