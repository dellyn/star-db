import React, { Component } from "react";
import ItemDetails from "./item-details";
import ListItem from "./list-item";
import SwapiService from "../../services";
import ErrorBoundry from "../error-boundry";

export default class ItemBlock extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItemId: 4,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedItemId: id,
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
                itemId={this.state.selectedItemId}
                getData={this.swapiService.getAllPerson}
              />
              <ItemDetails itemId={this.state.selectedItemId} />
            </div>
          </div>
        </div>
      </ErrorBoundry>
    );
  }
}
