import React, { Component } from "react";
import Spinner from "../spinner";
import "./item-details.scss";

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span>{label}: </span>
      <span>{item[field]}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({
        item,
        loading: false,
        image: getImageUrl(itemId),
      });
    });
  }

  render() {
    if (!this.state.item) {
      return <Spinner />;
    }
    const { image, item } = this.state;
    return (
      <div className="details-item col-4 list-group">
        <div className="details-item-image">
          <img src={image} alt="" />
        </div>
        <div className="details-item-info">
          <ul>
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
