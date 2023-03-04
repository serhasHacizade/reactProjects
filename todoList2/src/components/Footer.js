import React from 'react'
import { useTodo } from '../Context/TodoContext';

const Footer = () => {
    const {todos, setFilter, setTodos, filter} = useTodo();

    const clearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.completed));
    };

  return (
    <footer className="footer">
        <span className="count">
            <strong>{todos.length} </strong>

            item{todos.length > 1 && "s"} left
        </span>
        <ul className="filters">
            <li className="link">
                <a href = "#/" onClick={() => setFilter("all")} className = {filter === "all" ? "selected": ""}>All</a>
            </li>
            <li className="link">
                <a href = "#/" onClick={() => setFilter("active")} className = {filter === "active" ? "selected": ""}>Active</a>
            </li>
            <li className="link">
                <a href = "#/" onClick={() => setFilter("completed")} className = {filter === "completed" ? "selected": ""}>Completed</a>
            </li>
        </ul>
        <button className="clearCompleted" onClick = {clearCompleted}>Clear completed</button>
    </footer>
  )
}

export default Footer;