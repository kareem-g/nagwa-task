import React from "react";

interface QuizProps {
  showQuiz?: boolean;
  question?: object;
  quizs?: [];
  checkAnswer?: VoidFunction;
  correctAnswer?: string;
  selectedAnswer?: string;
  questionIndex?: number;
  nextQuestion?: VoidFunction;
  showTheResult?: VoidFunction;
}

function Quiz({
  showQuiz,
  question,
  quizs,
  checkAnswer,
  correctAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
}: QuizProps) {
  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div
              className="card p-4"
              style={{ background: "#3d3d3d", borderColor: "#646464" }}
            >
              test
              {showQuiz}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
