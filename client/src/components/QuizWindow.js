import { useState } from "react";
import { QuizData } from "./QuizData";
import "../componentsStyles/Quiz.css";

function Quiz() {
  const [score, setscore] = useState(0);
  const [currentquestion, setcurrentquestion] = useState(0);
  const [chooseoption, setchooseoption] = useState(0);
  // const[questions,setQuestions]=useState([]);
  // function Quiz() {
  //    // const [questions, setQuestions] = useState([]);
  //     useEffect(() => {
  //       fetch('https://opentdb.com/api.php?amount=10')
  //         .then(response => response.json())
  //         .then(data => setQuestions(data.results));
  //     }, []);

  function Changequestion() {
    if (currentquestion < QuizData.length - 1) {
      setcurrentquestion(currentquestion + 1);
    }
  }

  function Changetoprev() {
    if (currentquestion > 0) {
      setcurrentquestion(currentquestion - 1);
    }
  }

  return (
    <div className="QuizMainbody">
      <p className="heading-txt"> Quiz </p>
      <div className="container">
        <div className="question">
          <span id="Question-number">{currentquestion + 1}.</span>
          <span id="Question-txt">{QuizData[currentquestion].question}</span>
        </div>
        <div className="option-container">
          {QuizData[currentquestion].options.map((options, i) => {
            return (
              <button
                className="option-btn"
                onClick={() => setchooseoption(i + 1)}
              >
                {options}
              </button>
            );
          })}
        </div>
        <div>
          <input
            type="button"
            value="prev"
            id="next-button"
            onClick={Changetoprev}
          />
          <input
            type="button"
            value="next"
            id="prev-button"
            onClick={Changequestion}
          />
        </div>
      </div>
    </div>
  );
}
export default Quiz;
