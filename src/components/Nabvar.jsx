import React, { useState } from "react";
import "../style/nabvar.css";
import { Link } from "react-router-dom";

const Nabvar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  const hanldeMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="container__nabvar">
      <section className="nabvar">
        <h3 className="nabvar__title">
          <Link to={"/planet/Earth"}>THE PlANETS</Link>
        </h3>
        <img
          onClick={() => hanldeMenu()}
          className="nabvar__icon--hamburguesa"
          src="./public/icon-hamburger.svg"
          alt=""
        />
        <nav className={menu ? "nav__menu--open" : "nav__menu--closed"}>
          <ul className="nabvarlist__planets">
            <li>
              <div>
                <div className="navlist__circle--mercury"></div>
                <Link to="/planet/Mercury" className="navbar__planets">
                  MERCURY
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--venus"></div>
                <Link to="/planet/Venus" className="navbar__planets">
                  VENUS
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--earth"></div>
                <Link to="/planet/Earth" className="navbar__planets">
                  EARTH
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--mars"> </div>
                <Link to="/planet/Mars" className="navbar__planets">
                  MARS
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--jupiter"></div>

                <Link to="/planet/Jupiter" className="navbar__planets">
                  JUPITER
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--saturn"></div>
                <Link to="/planet/Saturn" className="navbar__planets">
                  SATURN
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--uranus"></div>

                <Link to="/planet/Uranus" className="navbar__planets">
                  URANUS
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--neptune"></div>
                <Link to="/planet/Neptune" className="navbar__planets">
                  NEPTUNE
                </Link>
              </div>
              <img
                className="chevron"
                src="./public/icon-chevron.svg"
                alt=""
              />
            </li>
          </ul>
        </nav>
      </section>
      <div className="nabvar__line"></div>
      {/* <section className={menu ? "nabvar__menu" : ""}>
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
      </section> */}
    </div>
  );
};

export default Nabvar;
