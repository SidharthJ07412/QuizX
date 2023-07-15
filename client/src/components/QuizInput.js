import React, { useState } from 'react';
import "../componentsStyles/Quiz.css";

const QuizInput = ({onSubmit  }) => {
  const [inputList, setInputList] = useState([
    {
      question: '',
      options: ['', '', '', ''],
      correctOption:0,
    },
  ]);

  const handleQuestionChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index].question = value;
    setInputList(list);
  };
  const handleQuestionBlur = (e, index) => {
    const { value } = e.target;
    if (value.trim() === "") {
      alert("Please enter a valid value");
    }
  };
  function handleOptionChange(e, qIndex, oIndex) {
    const { value } = e.target;
    const list = [...inputList];
    list[qIndex].options[oIndex] = value;
    setInputList(list);
  }

  const handleCorrectOptionChange = (e, index) => {
    const { value } = e.target;
    if(value===1 || value ===2 || value===3 || value===4)
    {
    const list = [...inputList];
    list[index].correctOption = value;
    setInputList(list); } 
    else{
      e.target.value = 0;
      alert("it should between 0-4");
    }
    };
  

  const handleAddQuestion = () => { 
    setInputList([
      ...inputList,
      { question: '', options: ['', '', '', ''], correctOption:0},
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasEmptyFields = false;
    inputList.forEach((input) => {
      if (
        !input.question ||
        input.options.some((option) => !option)
      ) {
        hasEmptyFields = true;
      }
    });

    
    if (hasEmptyFields) {
      alert('Please fill in all fields');
    } else {
      onSubmit(inputList);
    }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      {inputList.map((_input, index) => {
          return (
              <div key={index}>
                 <p className="heading-txt"> Quiz </p>
                  <div className="question" >
                    <span id= "Question-number">Q.</span>
                      <input
                          type="text"
                          onChange={(e) => handleQuestionChange(e, index)}
                          onBlur={e => handleQuestionBlur(e, index)}
                          placeholder="Question" />
                  </div>

                  <div className="option-container">
                      <input className='input-btn' placeholder="option 1" onChange={(e) => handleOptionChange(e, index, 0)} />
                      <input className='input-btn' placeholder="option 2" onChange={(e) => handleOptionChange(e, index, 1)} />
                      <input className='input-btn' placeholder="option 3" onChange={(e) => handleOptionChange(e, index, 2)} />
                      <input className='input-btn' placeholder="option 4" onChange={(e) => handleOptionChange(e, index, 3)} />
                      </div>
                      <div className='input-btn'>
                      <input type="number" placeholder="correct option index no." onChange={(e) => handleCorrectOptionChange(e, index)} />
                  </div>
              </div>
          );
      })}
      <div>
      <button value="nex" id="prev-button"onClick={handleAddQuestion}>Add ➕</button>
      <button value="prev" id="next-button" type="submit" onClick={onSubmit}>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default QuizInput;
