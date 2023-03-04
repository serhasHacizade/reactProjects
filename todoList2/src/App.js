import React from 'react'
import Content from './Content/Content';
import { TodoProvider } from './Context/TodoContext';
import Header from './Header/Header';

const App = () => {
  return (
    <TodoProvider>
      <section className='todoApp'>
        <Header />
        <Content />
      </section>
    </TodoProvider>
  )
}

export default App;