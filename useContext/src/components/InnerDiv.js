import React, { useContext } from 'react'
import Button from './Button'
import { ThemeContext } from '../contexts/ThemeContext';

const InnerDiv = () => {
  const { theme } = useContext(ThemeContext);
  const innerClassName = "inner" + theme  
  return (
    <div className={innerClassName}>
      <div className="componentDiv">Theme : {theme}</div>
      <Button />
    </div>
  )
}

export default InnerDiv