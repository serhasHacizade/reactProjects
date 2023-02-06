import React, { useState } from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
const Question = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{question}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinusSquare /> : <AiOutlinePlusSquare />}
        </button>
      </header>
      {showInfo && <p>{answer}</p>}
    </article>
  );
};

export default Question;
