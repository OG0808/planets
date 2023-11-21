import React from "react";
import { Route, Routes } from "react-router-dom";
import Earth from "./pages/Earth";
import "./App.css"
import Nabvar from "./components/Nabvar";

const App = () => {
  return (
    <div className="main__cotainer">
      <Nabvar/>
      <Routes>
        <Route path="/" element={<Earth />} />
      </Routes>
    </div>
  );
};

export default App;
