import { useState } from "react";
import { QuizData } from "./QuizData";
import "../componentsStyles/Quiz.css";

function Quiz() {
  const [score, setscore] = useState(0);
  const [currentquestion, setcurrentquestion] = useState(0);
  const [chooseoption, setchooseoption] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState([]);

  function changeQuestionAndSaveAnswer() {
    saveAnswer();
    changeQuestion();
  }

  function changeQuestion() {
    if (currentquestion < QuizData.length - 1) {
      setcurrentquestion(currentquestion + 1);
      setchooseoption(0); // Reset the chosen option when changing questions
    }
  }

  function goToPreviousQuestion() {
    if (currentquestion > 0) {
      setcurrentquestion(currentquestion - 1);
      setchooseoption(0); // Reset the chosen option when going to the previous question
    }
  }

  function handleOptionClick(optionIndex) {
    setchooseoption(optionIndex);
  }

  function saveAnswer() {
    const savedAnswer = {
      question: QuizData[currentquestion].question,
      chosenOption: QuizData[currentquestion].options[chooseoption - 1]
    };

    const updatedAnswers = savedAnswers.filter(answer => answer.question !== savedAnswer.question);
    setSavedAnswers([...updatedAnswers, savedAnswer]);
  }

  console.log("Saved Answers:", savedAnswers);

  return (
    <div className="QuizMainbody">
      <p className="heading-txt">Quiz</p>
      <div className="container">
        <div className="question">
          <span id="Question-number">{currentquestion + 1}.</span>
          <span id="Question-txt">{QuizData[currentquestion].question}</span>
        </div>
        <div className="option-container">
          {QuizData[currentquestion].options.map((option, i) => {
            return (
              <button
                className={`option-btn ${chooseoption === i + 1 ? "selected" : ""}`}
                onClick={() => handleOptionClick(i + 1)}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="button-container">
          <input
            type="button"
            value="Previous Question"
            id="prev-button"
            onClick={goToPreviousQuestion}
          />
          <input
            type="button"
            value="Save Answer & Change Option"
            id="next-button"
            onClick={changeQuestionAndSaveAnswer}
          />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
