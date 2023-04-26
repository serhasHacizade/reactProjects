//npm install redux react-redux
import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from 'react-redux';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Counter />}
    </>
  );
}

export default App;
