import React from "react";
import ListItem from "../list-item";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services";

const { getAllPerson, getAllStarship, getAllPlanet } = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const PersonList = withData(
  withChildFunction(ListItem, renderName),
  getAllPerson
);
const PlanetList = withData(
  withChildFunction(ListItem, renderName),
  getAllPlanet
);
const StarshipList = withData(
  withChildFunction(ListItem, renderName),
  getAllStarship
);

export { PersonList, PlanetList, StarshipList };
