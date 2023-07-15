import React from 'react';
import QuizInput from './QuizInput';

const ParentComponent = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return <QuizInput onSubmit={handleSubmit} />;
};

export default ParentComponent;
