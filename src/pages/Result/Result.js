import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";

import styles from "./Result.module.css";

const Result = ({ name, score }) => {
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);
  return (
    <div className={styles.result}>
      <span className={styles.title}>Final Score : {score}</span>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >Go Back to Home</Button>
    </div>
  );
};

export default Result;
