import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/">
              <News key="general" query="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" query="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" query="entertainment" />
            </Route>
            <Route exact path="/health">
              <News key="health" query="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" query="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" query="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" query="technology" />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
