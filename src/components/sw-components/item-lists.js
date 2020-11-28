import React from "react";
import ListItem from "../list-item";
import { withData, withSwapiService } from "../hoc-helpers";
// import SwapiService from "../../services";

// const { getAllPerson, getAllStarship, getAllPlanet } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPerson,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanet,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarship,
  };
};

const PersonList = withSwapiService(
  withData(withChildFunction(ListItem, renderName)),
  mapPersonMethodsToProps
);

const PlanetList = withSwapiService(
  withData(withChildFunction(ListItem, renderName)),
  mapPlanetMethodsToProps
);
const StarshipList = withSwapiService(
  withData(withChildFunction(ListItem, renderName)),
  mapStarshipMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
