import React from "react";
import data from "../../data.json";
import "../style/planet.css";

const Earth = () => {
  const planet = data[2];
  console.log(planet.name.toUpperCase());
  return (
    <div className="planet__container">
      <section className="planet">
        <img className="planet__img" src={planet.images.planet} alt="Earth" />
        <article className="planet__info">
          <h1 className="planet__info-title">{planet.name.toUpperCase()}</h1>
          <p className="planet__info-content">{planet.overview.content}</p>
          <div>
            <span className="planet__source">Source</span>
            <a
              className="planet__info-source"
              target="_blank"
              href={planet.overview.source}
            >
              Wikipedia
              <img
                className="planet__info-icon"
                src="./src/assets/icon-source.svg"
                alt=""
              />
            </a>
          </div>
          <div className="planet__buttons-container">
            <button className="planet__button earth__button--overview">
              OVERVIEW
            </button>
            <button className="planet__button earth__button--internal-structure">
              INTERNAL STRUCTURE
            </button>
            <button className="planet__button earth__button--surface-geology">
              SURFACE GEOLOGY
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Earth;
