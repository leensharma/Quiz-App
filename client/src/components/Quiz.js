import React, { useState } from "react";
import "./Quiz.css";

const Quiz = (props) => {
  const data = props.location.data;
  console.log(data.data.result[0]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleButtonClickOne = () => {
    if (
      data.data.result[currentQuestion].optionOne ===
      data.data.result[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.data.result.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleButtonClickTwo = () => {
    if (
      data.data.result[currentQuestion].optionTwo ===
      data.data.result[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.data.result.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleButtonClickThree = () => {
    if (
      data.data.result[currentQuestion].optionThree ===
      data.data.result[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.data.result.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const handleButtonClickFour = () => {
    if (
      data.data.result[currentQuestion].optionFour ===
      data.data.result[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.data.result.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {/* display the score only when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {data.data.result.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{data.data.result.length}
            </div>
            <div className="question-text">
              {data.data.result[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            <button onClick={handleButtonClickOne}>
              {data.data.result[currentQuestion].optionOne}
            </button>
            <button onClick={handleButtonClickTwo}>
              {data.data.result[currentQuestion].optionTwo}
            </button>
            <button onClick={handleButtonClickThree}>
              {data.data.result[currentQuestion].optionThree}
            </button>
            <button onClick={handleButtonClickFour}>
              {data.data.result[currentQuestion].optionFour}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
