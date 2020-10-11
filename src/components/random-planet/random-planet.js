import React, { Component } from "react";
import "./random-planet.css";

export default class RandomPlanet extends Component {
  render() {
    return (
      <section className="random-planet">
        <div className="container">
          <img src="" alt="Planet" className="view-img" />
          <div className="random-planet-info">
            <h2 className="random-planet-name">Bespin</h2>
            <div className="random-planet-population">
              Population:<span>1</span>
            </div>
            <div className="random-planet-rotation">
              Rotation Period:<span>2</span>
            </div>
            <div className="random-planet-diameter">
              Diameter:<span>3</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
