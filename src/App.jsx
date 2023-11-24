import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css"
import Nabvar from "./components/Nabvar";
import Planets from "./pages/Planets";
//  import Select from "./components/Select";

const App = () => {
const navigate = useNavigate()
  useEffect(() => {
    navigate("/planet/Earth");
  }, [])
  
  return (
    <div className="main__cotainer">
      <Nabvar/>
      {/* <Select/> */}
      <Routes>
        <Route path="/planet/:planetName" element={<Planets/>} />
      </Routes>
    </div>
  );
};

export default App;
