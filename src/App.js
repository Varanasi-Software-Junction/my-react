import React, { useState } from 'react';
import Question from './components/Question';
import Answer from './components/Answer';
import Result from './components/Result';
import questionsData from './data/questions.json';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    // Check if the answer is correct and update score
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <Result score={score} totalQuestions={questionsData.length} />
      ) : (
        <div>
          <Question
            question={questionsData[currentQuestion].question}
            options={questionsData[currentQuestion].options}
          />
          {/* Render answers here */}
        </div>
      )}
    </div>
  );
}

export default App;
