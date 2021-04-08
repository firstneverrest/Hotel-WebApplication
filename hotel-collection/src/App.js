// import React, { useState, useEffect } from "react";

import "./sass/main.scss";
// import Error from "./components/Error";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Explore from "./components/Explore/Explore";
import About from "./components/About";
import Contact from "./components/Contact";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router >
      <div className="container-left">
        <Sidebar />
      </div>
        <div className="container-right">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
