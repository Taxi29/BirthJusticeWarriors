import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ComingSoon from "./components/ComingSoon";
import Mission from "./components/Mission";
import Founders from "./components/Founders";
import Action from "./components/Action";
import ResourceGuide from "./components/ResourceGuide";

// Page components using ComingSoon

// Main App Component with Router
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/action" element={<Action />} />
          <Route path="/resource_guide" element={<ResourceGuide />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
