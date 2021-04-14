import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./sass/main.scss";
// import Error from "./components/Error";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Explore from "./components/Explore/Explore";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
// import axios from "axios";

function App() {
  // const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
