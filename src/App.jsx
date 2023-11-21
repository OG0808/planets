import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css"
import Nabvar from "./components/Nabvar";
import Planets from "./pages/Planets";
import Select from "./components/Select";

const App = () => {
  return (
    <div className="main__cotainer">
      <Nabvar/>
      <Routes>
        <Route path="/" element={<Select/>}/>
        <Route path="/planet/:planetName" element={<Planets/>} />
      </Routes>
    </div>
  );
};

export default App;
