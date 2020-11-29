import React, { Component } from "react";

import { PersonDetails, PersonList } from "../sw-components";

export default class Pages extends Component {
  state = {
    selectedItem: 1,
  };

  onItemSelected = (selectedItem) => {
    console.log(1);
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    console.log(selectedItem); 

    return (
      <div className="container d-flex">
        <PersonList
          selectedItem={selectedItem}
          onItemSelected={this.onItemSelected}
        />
        <PersonDetails itemId={selectedItem} />
      </div>
    );
  }
}
