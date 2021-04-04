import React, { useState, useEffect } from "react";

import "./sass/main.scss";
// import Error from "./components/Error";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
// import axios from "axios";

function App() {
  // const [hotels, setHotels] = useState([]);

  // useEffect(() => {
  //   getRequest();
  // }, []);

  // const getRequest = () => {
  //   axios.get('https://my-first-hosting-97075-default-rtdb.firebaseio.com/Activity.json')
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })

  // };

  return (
    <div className="App">
      <div className="container-left">
        <Sidebar />
      </div>
      <div className="container-right">
        <Home />
      </div>
    </div>
  );
}

export default App;
