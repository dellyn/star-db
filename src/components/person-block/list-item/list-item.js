import React, { Component } from "react";
import "./list-item.scss";
import Spinner from "../../spinner";

export default class ListItem extends Component {
  state = {
    selectedItem: this.props.personId,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({
        itemList,
      });
      console.log(this.state.itemList);
    });
  }
  selectedItem(id) {
    this.setState({
      selectedItem: id,
    });
  }

  listItemsRender(arr) {
    return arr.map(({ id, name }) => {
      if (id <= 4) {
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
      }
    });
  }
  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <Spinner />;
    }
    const listItems = this.listItemsRender(itemList);

    return (
      <div className="list-item-component jumbotron">
        <div className="container">
          <ul className="list-item list-group">{listItems}</ul>
        </div>
      </div>
    );
  }
}
