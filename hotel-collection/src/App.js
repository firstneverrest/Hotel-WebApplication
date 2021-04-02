import React, { useState, useEffect } from "react";

import "./sass/main.scss";
import Footer from "./components/Footer";
import Questions from "./components/Questions";
import data from "./data";
import firebase from "./utils/InitialFirebase";

function App() {
  const [questions, setQuestions] = useState([]);
  const [keepQuestions, setKeepQuestions] = useState([]);

  useEffect(() => {
    // addQuestionAnswer();
    readQuestionAnswer();
  }, []);

  // fetch question and answer from firebase realtime database
  // const fetchQA = async () => {
  //   try {
  //     // const response = await fetch(url)
  //   }
  // };

  const addQuestionAnswer = () => {
    const ref = firebase.database().ref("Activity");
    const questionAnswer = {
      question: "What is your favorite sport",
      answer: "Gun Shooting is my favorite sport",
    };

    ref.push(questionAnswer);
  };

  const readQuestionAnswer = () => {
    const ref = firebase.database().ref("Activity");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      const dataList = [];
      for (let id in data) {
        dataList.push({ id, ...data[id] });
      }
      setKeepQuestions(dataList);
      setQuestions(dataList);
    });
  };

  const filterQuestions = (category) => {
    if (category === "all") {
      setQuestions(keepQuestions);
      return;
    }

    const newQuestions = keepQuestions.filter(
      (question) => question.category === category
    );
    setQuestions(newQuestions);
  };
  return (
    <div className="App">
      <Questions questions={questions} filterQuestions={filterQuestions} />
      <Footer />
    </div>
  );
}

export default App;
