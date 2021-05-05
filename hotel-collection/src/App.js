import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./sass/main.scss";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Explore from "./components/Explore/Explore";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
