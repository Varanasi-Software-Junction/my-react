import React from 'react';

function Answer({ option, onAnswerClick }) {
  return (
    <button onClick={() => onAnswerClick(option)}>
      {option}
    </button>
  );
}

export default Answer;