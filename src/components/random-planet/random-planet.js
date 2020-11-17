import React, { Component } from "react";
import Spinner from "../spinner";
import "./random-planet.scss";
import SwapiService from "../../services";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    id: null,
    name: null,
    population: null,
    rotation: null,
    diameter: null,
    loading: true,
    error: false,
  };
  componentDidMount() {
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    });
  };

  onError = () => {
    console.log("error1");
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 18) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    // if page loading we use preloader
    const hasData = !(loading || error);
    const errorMessage = error && <ErrorIndicator />;
    const spinner = loading && <Spinner />;
    const content = hasData && <PlanetView planet={planet} />;

    return (
      <section className="random-planet jumbotron rounded">
        <div className="container">
          {content}
          {spinner}
          {errorMessage}
        </div>
      </section>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { name, population, rotationPeriod, diameter, id } = planet;
  return (
    <React.Fragment>
      <div className="random-planet-flex">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="Planet"
          className="planet-img"
        />
        <div className="random-planet-info">
          <h4 className="random-planet-name">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Population:<span>{population}</span>
            </li>
            <li className="list-group-item">
              Rotation Period:<span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              Diameter:<span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
