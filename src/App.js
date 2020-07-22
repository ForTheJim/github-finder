import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import Users from "./Components/users/Users";
import User from "./Components/users/User";
import Search from "./Components/users/Search";
import Alert from "./Components/layout/Alert";
import About from "./Components/pages/About";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar></Navbar>
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <>
                    <Search />
                    <Users></Users>
                  </>
                )}
              />
            </Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/user/:login" component={User}></Route>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
