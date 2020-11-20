import React, { Component } from "react";
import Spinner from "../../spinner";
import SwapiService from "../../../services";

import "./item-details.scss";
export default class ItemDetails extends Component {
  state = {
    itemData: null,
    loading: false,
  };
  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }
    this.setState({
      loading: true,
    });
    this.swapiService.getPerson(itemId).then((person) => {
      this.setState({
        itemData: person,
        itemId: itemId,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else if (!this.state.itemData) {
      return <div>select person</div>;
    }
    const { id, name, birthYear, eyeColor, gender } = this.state.itemData;
    return (
      <React.Fragment>
        <div className="person-details jumbotron">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="Planet"
            className="person-details-img"
          />
          <div className="person-details-info">
            <h4 className="person-detailst-name">{name}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Gender: {gender}</li>
              <li className="list-group-item">Birth Year: {birthYear}</li>
              <li className="list-group-item">Eye Color: {eyeColor}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
