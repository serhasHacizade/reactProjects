import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import InnerDiv from './InnerDiv';
const Second = () => {
  const { theme } = useContext(ThemeContext)
  const className = "second" + theme;
  const h1className = "h1" + theme
  return (
    <div className={className}>
      <h1 className={h1className}>Second components</h1>
      <InnerDiv/>
    </div>
  )
}

export default Second;