import React from 'react'
import First from './components/First'
import Second from './components/Second'
import { ThemeContextProvider } from './contexts/ThemeContext'

const App = () => {
  return (
    //you must wrap every component with provider in app.js
    <ThemeContextProvider>
      <div className="container">
        <First />
        <Second />
      </div>
    </ThemeContextProvider>
  )
}

export default App;