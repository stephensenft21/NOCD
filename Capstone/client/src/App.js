import React, { Component } from "react";
import { Redirect, BrowserRouter as Router, Route, } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { getUser, removeUser } from "./API/userManager";
import MaterialNavDrawer from "./components/MaterialComponent/MaterialNavDrawer";
import "./App.css";
import PatientData from "./components/PatientData";
import RecordList from "./components/RecordList";
import Dashboard from "./components/Dashboard"

class App extends Component {
  state = {
    user: getUser()
  };

  logout = () => {
    this.setState({ user: null });
    removeUser()
    
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header user={this.state.user} logout={this.logout} />
          <MaterialNavDrawer user={this.state.user} logout={this.logout} />
          <Route
            exact
            path="/login"
            render={() => <Login onLogin={user => this.setState({ user })} />}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <Register onLogin={user => this.setState({ user })} />
            )}
          />
          <Route
            exact
            path="/Compulsions/New"
            render={() => {
              return this.state.user ? (
                <Home
                  user={this.state.user}
                  getCompulsionsData={this.getCompulsionsData}
                />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
          <Route
            exact
            path="/PatientData"
            render={props => {
              return (
                <PatientData
                  user={this.state.user}
                  {...this.props}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/PatientData/:compulsionId(\d+)"
            render={props => {
              return (
                <Dashboard className="Dashboard-View"
                  user={this.state.user}
                  // {...this.props}
                  {...props}
                />
              );
            }}
          />
          <Route
            user={this.state.user}
            exact
            path="/Compulsion/:compulsionId(\d+)"
            render={props => {
              return <RecordList {...this.props} {...props} />;
            }}
          />
          <Route
            exact
            path="/Records"
            render={props => {
              return (
                <RecordList user={this.state.user} {...this.props} {...props} />
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
