import React, { Component } from "react";
import "./app.scss";
import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services";
import ItemDetails, { Record } from "../item-details";

export default class App extends Component {
  state = {
    hasError: false,
  };
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={10}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
      </ItemDetails>
    );

    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div className="">
          {personDetails}
          {starshipDetails}
        </div>
      </div>
    );
  }
}
