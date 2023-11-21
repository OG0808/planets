import { useState } from "react";
import data from "../../data.json";
import "../style/planet.css";
import { useParams } from "react-router-dom";

const Planets = () => {
  const { planetName } = useParams();

  const planet = data.find((planet) => planet.name === planetName);

  const [options, setOptions] = useState("overview");
  const [images, setImages] = useState("planet")

  return (
    <div className="planet__container">
      <section className="planet">
        <img
          className="planet__img"
          src={planet.images?.[images]}
          alt={planet?.name.toUpperCase()}
        />
        <article className="planet__info">
          <h1 className="planet__info-title">{planet?.name.toUpperCase()}</h1>
          <p className="planet__info-content">{planet?.[options].content}</p>
          <div className="planet__links">
            <span className="planet__source">Source </span>
            <a
              className="planet__info-source"
              target="_blank"
              href={planet?.[options].source}
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
            <button
              onClick={() => {
                setOptions("overview");
                setImages("planet")
              }}
              className="planet__button earth__button--overview"
            >
              <span className="planet__button-number">01 </span>
              OVERVIEW
            </button>
            <button
              onClick={() => {
                setOptions("structure");
                setImages("internal")
              }}
              className="planet__button earth__button--internal-structure"
            >
              <span className="planet__button-number">02 </span>
              INTERNAL STRUCTURE
            </button>
            <button
              onClick={() => {
                setOptions("geology");
                setImages("geology")
              }}
              className="planet__button earth__button--surface-geology"
            >
              <span className="planet__button-number">03 </span>
              SURFACE GEOLOGY
            </button>
          </div>
        </article>
      </section>

      <section className="planet__data">
        <ul className="planet__data-list">
          <div className="planet__data-item-wrapper">
            <li className="planet__data-item">
              <span className="planet__data-label">ROTATION TIME </span>
              {planet?.rotation}
            </li>
          </div>

          <div className="planet__data-item-wrapper">
            <li className="planet__data-item">
              <span className="planet__data-label">REVOLUTION TIME </span>
              {planet?.revolution}
            </li>
          </div>

          <div className="planet__data-item-wrapper">
            <li className="planet__data-item">
              <span className="planet__data-label">RADIUS </span>
              {planet?.radius}
            </li>
          </div>

          <div className="planet__data-item-wrapper">
            <li className="planet__data-item">
              <span className="planet__data-label">AVERAGE TEMP </span>
              {planet?.temperature}
            </li>
          </div>
        </ul>
      </section>
    </div>
  );
};

export default Planets;
