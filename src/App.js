import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import User from "./Components/users/User";
import Alert from "./Components/layout/Alert";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar></Navbar>
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/user/:login" component={User}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
