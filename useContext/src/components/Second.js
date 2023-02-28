import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Button from './Button';
const Second = () => {
  const { theme } = useContext(ThemeContext)
  const className = "second" + theme;
  const h1className = "h1" + theme
  const innerClassName = "inner" + theme
  return (
    <div className={className}>
      <h1 className={h1className}>Second components</h1>
      <div className={innerClassName}>
        <div className="componentDiv">Theme : {theme}</div>
        <Button />
      </div>
    </div>
  )
}

export default Second;