import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <nav className="header-nav">
          <h1 className="logo">Star DB</h1>

          <ul>
            <li>
              <a href="#1">People</a>
            </li>
            <li>
              <a href="#2">Planets</a>
            </li>
            <li>
              <a href="#3">Starsip</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Header;
