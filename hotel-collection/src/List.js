import React from "react";
import firebase from "../utils/InitialFirebase";

const List = ({ data }) => {
  const deleteQuestionAnswer = () => {
    const ref = firebase.database().ref("Activity").child(data.id);
    ref.remove();
  };

  const editQuestionAnswer = () => {
    const ref = firebase.database().ref("Activity").child(data.id);
    let updatedData = {
      question: "Hello",
      answer: "Hi",
    };

    ref.update(updatedData);
  };

  return (
    <div>
      <h3>{data.question}</h3>
      <p>{data.answer}</p>
      <p>{data.id}</p>
      <button onClick={deleteQuestionAnswer}>Delete</button>
      <button onClick={editQuestionAnswer}>Edit</button>
    </div>
  );
};

export default List;
