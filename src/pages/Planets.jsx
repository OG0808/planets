import { useState, useEffect } from "react";
import data from "../../data.json";
import "../style/planet.css";
import { useParams } from "react-router-dom";

const Planets = () => {
  const { planetName } = useParams();

  const planet = data.find((planet) => planet.name === planetName);

  const [options, setOptions] = useState("overview");
  const [images, setImages] = useState("planet");
  const over = () => (window.innerWidth < 601 ? "OVERVIEW" : "OVERVIEW");

  const structure = () =>
    window.innerWidth < 601 ? "STRUCTURE": "INTERNAL STRUCTURE" ;
  const geology = () =>
    window.innerWidth < 601 ?  "GEOLOGY": "SURFACE GEOLOGY";

  const [overview, setOver] = useState(over);
  const [structur, setStructur] = useState(structure);
  const [golog, setGolog] = useState(geology);

  useEffect(() => {
    const handleResize = () => {
      setOver(over);
      setStructur(structure);
      setGolog(geology);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="planet__container">
      <section className="planet">
        <div className="planet__container--img">
          <div  className={
              images === "geology"
                ? `planet__img-geology-${planetName.toLocaleLowerCase()}`
                : ""  
            }
            src={planet.images?.[images === "geology" ? "geology" : ""]}></div>
          <img
            // className={
            //   images === "geology"
            //     ? `planet__img-geology-${planetName.toLocaleLowerCase()}`
            //     : ""
            // }
            src={planet.images?.[images === "geology" ? "planet" : images]}
            alt={planet?.name.toUpperCase()}
          />
        </div>

        <article className="planet__info">
          <div>
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
                  src="./icon-source.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="planet__buttons-container">
            <button
              onClick={() => {
                setOptions("overview");
                setImages("planet");
              }}
              className={`${planetName.toLocaleLowerCase()}__button--overview  planet__button`}
            >
              <span className="planet__button-number">{ window.innerWidth < 601 ? "": "01" } </span>
              {overview}
            </button>
            <button
              onClick={() => {
                setOptions("structure");
                setImages("internal");
              }}
              className={`${planetName.toLocaleLowerCase()}__button--overview  planet__button`}
            >
              <span className="planet__button-number">{ window.innerWidth < 601 ? "": "02" } </span>
              {structur}
            </button>
            <button
              onClick={() => {
                setOptions("geology");
                setImages("geology");
              }}
              className={`${planetName.toLocaleLowerCase()}__button--overview  planet__button`}
            >
              <span className="planet__button-number">{ window.innerWidth < 601 ? "": "03" } </span>
             {golog}
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
