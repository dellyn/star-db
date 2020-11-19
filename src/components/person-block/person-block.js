import React, { Component } from "react";
import PersonDetails from "./person-details";
import ListItem from "./list-item";
import ErrorIndicator from "../error-indicator";

export default class PersonBlock extends Component {
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
      <div className="d-flex person-block">
        <ListItem
          onItemSelected={this.onPersonSelected}
          personId={this.state.selectedPersonId}
        />
        <PersonDetails personId={this.state.selectedPersonId} />
      </div>
    );
  }
}
