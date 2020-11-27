import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;

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

export default withSwapiService(PlanetDetails);
