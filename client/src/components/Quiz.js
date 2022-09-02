import React from "react";

const Quiz = ({
  showQuiz,
  question,
  quizs,
  checkAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
  marks,
}) => {
  const answers = ["noun", "adverb", "adjective", "verb"];
  console.log((marks / quizs.length) * 100);

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
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className="mb-2 fs-normal lh-base w-25">
                  {question?.word}
                </h5>
                <div>
                  <progress
                    className="Bar"
                    value={(marks / quizs.length) * 100}
                    max="100"
                  >
                    {" "}
                    {(marks / quizs.length) * 100}{" "}
                  </progress>
                </div>
                <h5
                  style={{
                    color: "#60d600",
                    width: "10rem",
                    textAlign: "right",
                  }}
                >
                  {quizs.indexOf(question) + 1} / {quizs?.length}
                </h5>{" "}
              </div>
              <div>
                {answers?.map((item, index) => (
                  <button
                    key={index}
                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark`}
                    onClick={(event) => checkAnswer(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {questionIndex + 1 !== quizs.length ? (
                <button
                  className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
