import React, { useState } from "react";
import { useHistory } from 'react-router'
import { Button } from "@material-ui/core";

import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Question = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  setScore,
  score,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
      if(currentQuestion > 8){
          history.push('/result')
      } else if(selected) {
          setCurrentQuestion(currentQuestion + 1);
          setSelected()
      } else {
          setError("Please select an option first")
      }
  }

  return (
    <div className="question">
      <h1>Question {currentQuestion + 1}</h1>
      <div className="singleQuestion">
        <h2> {questions[currentQuestion].question} </h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => handleCheck(i)}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 180 }}
            href="/"
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 180 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
