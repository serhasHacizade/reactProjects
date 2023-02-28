import {createContext, useEffect, useState} from 'react'

//this component use createContext cause this component will called by every component
export const ThemeContext = createContext();
//this line set default theme value for useEffect
const defaultTheme = localStorage.getItem("theme") || "light";
 
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme);

    //we write default theme in local storage cause every screen repetition change the theme value
    
    useEffect(() =>{
        localStorage.setItem("theme", theme)
    },[theme])
    
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