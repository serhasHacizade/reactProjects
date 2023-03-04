import React from 'react'
import NewTodoForm from './NewTodoForm';

const Header = () => {
  return (
    <header className="header">
      <h1>Todo list with useContext</h1>
      <NewTodoForm/>
    </header>
  )
}

export default Header;