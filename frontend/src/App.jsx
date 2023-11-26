import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Houses from "./components/Houses.jsx";
import House from "./components/House.jsx";
import Navbar from "./components/Navbar.jsx";
import NewHouseForm from "./components/NewHouseForm.jsx";

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/houses/new" element={<NewHouseForm />} />
          <Route path="/houses/:id" element={<House />} />
          <Route path="/houses" element={<Houses />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
