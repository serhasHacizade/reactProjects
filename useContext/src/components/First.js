import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import InnerDiv from './InnerDiv';
const First = () => {
  const { theme } = useContext(ThemeContext);
  const className = "first" + theme;
  const h1className = "h1" + theme
  return (
    <div className={className}>
      <h1 className={h1className}>First components</h1>
      <InnerDiv/>

    </div>
  )
}

export default First;