import React from "react";

import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services";

const {
  getPerson,
  getPersonImage,
  getStarship,
  getStarshipImage,
  getPlanet,
  getPlanetImage,
} = new SwapiService();

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="name" label="Starship" />
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
    </ItemDetails>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="name" label="Planet" />
      <Record field="population" label="Population" />
      <Record field="gravity" label="Gravity" />
    </ItemDetails>
  );
};
const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="name" label="Name" />
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
