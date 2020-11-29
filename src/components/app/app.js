import React, { Component } from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services";
import Pages from "../pages";

import { SwapiServiceProvider } from "../swapi-service-context";

export default class App extends Component {
  state = {
    hasError: false,
  };
  swapiService = new SwapiService();

  render() {
    return (
      <SwapiServiceProvider value={this.swapiService}>
        <div className="app">
          <Header />
          <RandomPlanet />
          <div className="lists container">
            <Pages />
            {/* <PersonList />
            <StarshipList />
            <PlanetList /> */}
          </div>
        </div>
      </SwapiServiceProvider>
    );
  }
}
