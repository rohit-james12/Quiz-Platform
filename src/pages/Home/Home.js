import React, { useState } from "react";
import { useHistory } from "react-router";

import { TextField, Button } from "@material-ui/core";
import styles from "./Home.module.css";
import img from "../../images/undraw_Questions_re_1fy7.png";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function Home({ name, setName, fetchQuestions }) {
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions();
      history.push("/quiz");
    }
  };

  return (
    <div className={styles.content}>
      <img src={img} alt="img" className={styles.img} />
      <div className={styles.info}>
        <h1>User Information</h1>
        <div className={styles.infocon}>
          {error && <ErrorMessage>Please Fill your name</ErrorMessage>}
          <TextField
            label="Enter your name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
            className={styles.submit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
