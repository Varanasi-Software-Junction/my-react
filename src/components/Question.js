import React from 'react';
import Answer from './Answer';

function Question({ question, options, onAnswerClick }) {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option, index) => (
        <Answer key={index} option={option} onAnswerClick={onAnswerClick} />
      ))}
    </div>
  );
}

export default Question;