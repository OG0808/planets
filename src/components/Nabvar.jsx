import React, { useState } from "react";
import "../style/nabvar.css";
import { Link } from "react-router-dom";

const Nabvar = () => {
  const [menu, setMenu] = useState(false);
 
  const hanldeMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="container__nabvar ">
      <section className="nabvar">
        <h3 className="nabvar__title">
          <Link to={"/planet/Earth"}>THE PlANETS</Link>
        </h3>
        <img
          onClick={() => hanldeMenu()}
          className="nabvar__icon--hamburguesa"
          src="./icon-hamburger.svg"
          alt=""
      
        />
        <nav className={menu ? "nav__menu--open" : "nav__menu--closed"}>
          <ul className="nabvarlist__planets">
            <li>
              <div>
                <div className="navlist__circle--mercury"></div>
                <Link   onClick={() => hanldeMenu()} to="/planet/Mercury" className="navbar__planets">
                  MERCURY
                </Link>
              </div>
              <img
                className="chevron"
                src="./icon-chevron.svg"
                alt=""
              />
            </li>

            <li>
              <div>
                <div className="navlist__circle--venus"></div>
                <Link onClick={() => hanldeMenu()} to="/planet/Venus" className="navbar__planets">
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
                <Link onClick={() => hanldeMenu()} to="/planet/Earth" className="navbar__planets">
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
                <Link onClick={() => hanldeMenu()} to="/planet/Mars" className="navbar__planets">
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

                <Link onClick={() => hanldeMenu()} to="/planet/Jupiter" className="navbar__planets">
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
                <Link onClick={() => hanldeMenu()} to="/planet/Saturn" className="navbar__planets">
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

                <Link onClick={() => hanldeMenu()} to="/planet/Uranus" className="navbar__planets">
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
                <Link onClick={() => hanldeMenu()} to="/planet/Neptune" className="navbar__planets">
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
  
    </div>
  );
};

export default Nabvar;
// import React, { useState } from "react";
// import "../style/nabvar.css";
// import { Link } from "react-router-dom";

// const Nabvar = () => {
//   const [menu, setMenu] = useState(false);

//   const handleMenu = () => {
//     setMenu(!menu);
//   };

//   return (
//     <nav className="navbar navbar-light bg-light fixed-top container__nabvar">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/planet/Earth">
//           THE PLANETS
//         </Link>
//         <button
//           className=" nabvar__icon--hamburguesa "
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasNavbar"
//           aria-controls="offcanvasNavbar"
//           onClick={() => handleMenu()}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div
//           className={menu ? "offcanvas offcanvas-end show" : "offcanvas offcanvas-end"}
//           tabIndex="-1"
//           id="offcanvasNavbar"
//         >
//           <div className="offcanvas-header">
//             <h5 className="offcanvas-title">PLANETS</h5>
//             <button
//               type="button"
//               className="btn-close"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//               onClick={() => handleMenu()}
//             ></button>
//           </div>
//           <div className="offcanvas-body">
//             <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active">
//                   Inicio
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="#" className="nav-link">
//                   Enlace
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <Link
//                   to="#"
//                   className="nav-link dropdown-toggle"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Dropdown
//                 </Link>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <Link to="#" className="dropdown-item">
//                       Acción
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item">
//                       Otra acción
//                     </Link>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <Link to="#" className="dropdown-item">
//                       Algo más aquí
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
          
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nabvar;
