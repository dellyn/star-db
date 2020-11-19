import React, { Component } from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet";
import PersonBlock from "../person-block";

import ErrorIndicator from "../error-indicator";

export default class App extends Component {
  state = {
    hasError: false,
  };
  // componentDidCatch() {
  //   this.setState({ hasError: true });
  // }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <PersonBlock />
      </div>
    );
  }
}
