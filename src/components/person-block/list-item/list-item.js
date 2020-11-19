import React, { Component } from "react";
import "./list-item.scss";
import SwapiService from "../../../services";
import Spinner from "../../spinner";

export default class ListItem extends Component {
  swapiService = new SwapiService();
  state = {
    peopleList: null,
    selectedItem: this.props.personId,
  };

  componentDidMount() {
    this.swapiService.getAllPerson().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }
  selectedItem(id) {
    this.setState({
      selectedItem: id,
    });
  }

  listItemsRender(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className={
            this.state.selectedItem == id
              ? "selected list-group-item"
              : "list-group-item"
          }
          key={id}
          onClick={() => {
            this.props.onItemSelected(id);
            this.selectedItem(id);
          }}
        >
          {name}
        </li>
      );
    });
  }
  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }
    const listItems = this.listItemsRender(peopleList);

    return (
      <div className="list-item-component jumbotron">
        <div className="container">
          <ul className="list-item list-group">{listItems}</ul>
        </div>
      </div>
    );
  }
}
