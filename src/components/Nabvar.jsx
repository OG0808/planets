import React from "react";
import "../style/nabvar.css"
import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <div className="container__nabvar">
      <section className="nabvar">
    
        <h3 className="nabvar__title">PLANETS</h3>
        <ul className="nabvarlist__planets">
        
          <Link  className="nabvar__planets">MERCURY</Link>
          <Link className="nabvar__planets">VENUS</Link>
          <Link className="nabvar__planets">EARTH</Link>
          <Link className="nabvar__planets">MARS</Link>
          <Link className="nabvar__planets">JUPITER</Link>
          <Link className="nabvar__planets">SATURN</Link>
          <Link className="nabvar__planets">URANUS</Link>
          <Link className="nabvar__planets">NEPTUNE</Link>
        </ul>
      </section>
    </div>
  );
};

export default Nabvar;
