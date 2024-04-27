import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import { Routes, Route,  BrowserRouter as Router, useRoutes } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import FooterBar from "./components/FooterBar";
import Individual from "./page/Individual";
import Business from "./page/Business";

function App() {
  return (
    <>
      <Navigationbar />
      <main>
        <Router>
          <Routes>
            <Route path="/" exact element={<Individual />} />
            <Route path="business" element={<Business />} />
          </Routes>
        </Router>
      </main>
      <FooterBar />
    </>
  );
}

export default App;
