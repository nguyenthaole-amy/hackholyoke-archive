import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer/Footer"
import MainPage from "./component/pages/main/MainPage";
import AboutPage from "./component/pages/aboutus/AboutPage";
import SchedulePage from "./component/pages/planPage/SchedulePage";
import ResourcesPage from "./component/pages/resources/Resources";

import "./App.css";


function PagesWNav() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default PagesWNav;
