import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <nav className="header-nav">
          <img src="" alt="" className="logo" />

          <ul>
            <li>
              <a href="#">People</a>
            </li>
            <li>
              <a href="#">Planets</a>
            </li>
            <li>
              <a href="#">Starsip</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default Header;
