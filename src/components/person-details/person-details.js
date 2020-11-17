import React, { Component } from "react";
import Spinner from "../spinner";
import SwapiService from "../../services";

import "./person-details.scss";
export default class PersonDetails extends Component {
  state = {
    personData: null,
    loading: false,
  };
  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.setState({
      loading: true,
    });
    this.swapiService.getPerson(personId).then((person) => {
      this.setState({
        personData: person,
        personId: personId,
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else if (!this.state.personData) {
      return <div>select person</div>;
    }
    const { id, name, birthYear, eyeColor, gender } = this.state.personData;
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
