import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
//import {BrowserRouter as Router} from 'react-router-dom';
import { HashRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Discography from "./pages/Discography";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <AnimatePresence>
        <Router>
          <NavBar />
          <MobileNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
