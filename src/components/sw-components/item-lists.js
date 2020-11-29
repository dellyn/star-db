import React from "react";
import ListItem from "../list-item";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(withChildFunction(renderName)(ListItem))
);

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(withChildFunction(renderName)(ListItem))
);

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(withChildFunction(renderName)(ListItem))
);

export { PersonList, PlanetList, StarshipList };
