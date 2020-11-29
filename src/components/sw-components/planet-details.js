import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="name" label="Planet" />
      <Record field="population" label="Population" />
      <Record field="gravity" label="Gravity" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage  ,
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
