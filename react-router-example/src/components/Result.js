import React from 'react';

function Result({ score, totalQuestions }) {
  return (
    <div>
      <h2>You scored {score} out of {totalQuestions}</h2>
    </div>
  );
}

export default Result;
