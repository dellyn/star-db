import React from "react";
import ListItem from "../list-item";
import withData from "../hoc-helpers";
import SwapiService from "../../services";

const { getAllPerson, getAllStarship, getAllPlanet } = new SwapiService();

const PersonList = withData(ListItem, getAllPerson);
const PlanetList = withData(ListItem, getAllPlanet);
const StarshipList = withData(ListItem, getAllStarship);

export { PersonList, PlanetList, StarshipList };
