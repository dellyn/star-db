import React, { Component } from "react";
import "./app.scss";
import Header from "../header";
import ListItem from "../list-item";
import RandomPlanet from "../random-planet";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

export default class App extends Component {
  state = {
    selectedPersonId: 4,
    hasError: false,
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  onPersonSelected = (id) => {
    this.setState({
      selectedPersonId: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div className="d-flex">
          <ListItem onItemSelected={this.onPersonSelected} />
          <PersonDetails personId={this.state.selectedPersonId} />
        </div>
      </div>
    );
  }
}
