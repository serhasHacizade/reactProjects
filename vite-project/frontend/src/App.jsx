import './App.css';
import PostsList from './components/PostsList';
import MainHeader from "./components/MainHeader";
import { useState } from 'react';

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };
  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App