import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log("loadgin here");
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/pages/popup.html" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
