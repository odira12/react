import React, { useState } from 'react';

const Grader = () => {
  const [score, setScore] = useState('');
  const [grade, setGrade] = useState('');

  const handleScoreChange = (e) => {
    setScore((e.target.value));
  };

  const calculateGrade = () => {
    if (score < 0) {
      setGrade('Invalid Score');
    } else if (score < 40) {
      setGrade('Fail');
    } else if (score < 50) {
      setGrade('D');
    } else if (score < 60) {
      setGrade('C');
    } else if (score < 70) {
      setGrade('B');
    } else {
      setGrade('A');
    }
  };

  return (
    <div>
      <label>Enter your score</label><br/>
      <input type="number" value={score} onChange={handleScoreChange} /><br/>
      <button onClick={calculateGrade}>Calculate Grade</button>
      <p>Your Grade: {grade}</p>
    </div>
  );
};

export default Grader;