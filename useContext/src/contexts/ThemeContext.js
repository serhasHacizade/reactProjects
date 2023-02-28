import {createContext, useState} from 'react'

//this component use createContext cause this component will called by every component
export const ThemeContext = createContext();
 
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    
    //you can call this function where you want 
    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }
    //this object has 2 variables, theme and function thats toggle theme every component use useContext
    const values = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value = {values}> {children} </ThemeContext.Provider>
    )
}