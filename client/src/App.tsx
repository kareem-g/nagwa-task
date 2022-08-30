import React, { useEffect, useState } from "react";

import Quiz from "./Components/Quiz";

function App() {
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState([{}]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");

  // Display Controlling States
  const [showQuiz, setShowQuiz] = useState(false);

  // Load JSON Data
  useEffect(() => {
    fetch("/words")
      .then((response) => response.json())
      .then((data) => setQuizs(data));
  }, []);

  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  return (
    <>
      {/* Quiz Page */}
      <Quiz showQuiz={showQuiz} question={question} />{" "}
    </>
  );
}

export default App;
