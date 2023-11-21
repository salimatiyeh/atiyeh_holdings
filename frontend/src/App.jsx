import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Houses from "./components/Houses.jsx";
import HouseDetails from "./components/HouseDetails.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/houses/:id" element={<HouseDetails />} />
        <Route path="/houses" element={<Houses />} />
      </Routes>
    </Router>
  );
};

export default App;
