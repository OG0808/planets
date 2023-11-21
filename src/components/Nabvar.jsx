import React from "react";
import "../style/nabvar.css";
import { Link } from "react-router-dom";

const Nabvar = () => {



  return (
    <div className="container__nabvar">
      <section className="nabvar">
        <h3 className="nabvar__title"><Link to={"/"}>PlANETS</Link></h3>
        <ul className="nabvarlist__planets">
          <li><Link to="/planet/Mercury" className="navbar__planets">MERCURY</Link></li>
          <li><Link to="/planet/Venus" className="navbar__planets">VENUS</Link></li>
          <li><Link to="/planet/Earth" className="navbar__planets">EARTH</Link></li>
          <li><Link to="/planet/Mars" className="navbar__planets">MARS</Link></li>
          <li><Link to="/planet/Jupiter" className="navbar__planets">JUPITER</Link></li>
          <li><Link to="/planet/Saturn" className="navbar__planets">SATURN</Link></li>
          <li><Link to="/planet/Uranus" className="navbar__planets">URANUS</Link></li>
          <li><Link to="/planet/Neptune" className="navbar__planets">NEPTUNE</Link></li>
        </ul>
      </section>
    </div>
  );
};

export default Nabvar;
