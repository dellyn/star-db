import React, { Component } from "react";
import PersonDetails from "./person-details";
import ListItem from "./list-item";
import SwapiService from "../../services";
import ErrorBoundry from "../error-boundry";

export default class PersonBlock extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPersonId: 4,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPersonId: id,
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <div className="person-block">
          <div className="container">
            <div className="d-flex row">
              <ListItem
                className="col-6"
                onItemSelected={this.onPersonSelected}
                personId={this.state.selectedPersonId}
                getData={this.swapiService.getAllPerson}
              />
              <PersonDetails personId={this.state.selectedPersonId} />
            </div>
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}
