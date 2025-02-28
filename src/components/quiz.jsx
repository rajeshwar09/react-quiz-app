import React, { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const IsQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  };

  if (IsQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Complete Trophy" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5); // To randomize order of options

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
