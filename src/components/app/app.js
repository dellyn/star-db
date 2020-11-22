import React, { Component } from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

export default class App extends Component {
  state = {
    hasError: false,
  };
  swapiService = new SwapiService();

  render() {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <div className="lists container">
          <PersonList />
          <StarshipList />
          <PlanetList />
        </div>
        <div className="details container">
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={8} />
          <StarshipDetails itemId={12} />
        </div>
      </div>
    );
  }
}
