import React, { Component } from "react";
import Spinner from "../spinner";
import "./item-details.scss";

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span>{label}: </span>
      <span>{field}</span>
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    loading: false,
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
    this.setState({
      loading: true,
    });
    getData(itemId).then((item) => {
      this.setState({
        item,
        loading: false,
        image: getImageUrl(itemId),
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    const { image, item } = this.state;
    console.log(item);
    return (
      <div className="item-details jumbotron">
        <img src={image} alt="Planet" className="item-details-img" />
        <div className="item-details-inf1o">
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
