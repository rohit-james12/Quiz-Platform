import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

import styles from "./Quiz.module.css";
import Question from "../../components/Question/Question";

const Quiz = ({ name, score, questions, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currentQuestion]);

  const handleShuffle = (opts) => {
    return opts.sort(() => Math.random() - 0.5);
  };

  return (
    <div className={styles.quiz}>
      <span className={styles.subtitle}>Welcome, {name}</span>
      {questions ? (
        <>
          <div className={styles.quizInfo}>
            <span>Random Quiz</span>
            <span>Score : {score}</span>
          </div>
          <Question
            questions={questions}
            currentQuestion={currentQuestion}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
            setCurrentQuestion={setCurrentQuestion}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={100}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
