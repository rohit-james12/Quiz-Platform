import { useState } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&type=multiple`
    );
    setQuestions(data.results);
    console.log(data.results);
  };
  return (
    <>
      <div className="content-wrap">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route exact path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route exact path="/result">
            <Result name={name} score={score} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
