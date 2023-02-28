import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
const Button = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const className = theme + "btn";
  return (
    <button onClick={toggleTheme} className={className}>Change Theme</button>
  )
}

export default Button;