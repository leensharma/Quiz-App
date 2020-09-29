import React from "react";
import Home from "./Home";
import TestList from "./TestList";
import Quiz from "./Quiz";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import { Route, Redirect, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/testList" component={TestList} />
        <Route exact path="/quiz" component={Quiz} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
