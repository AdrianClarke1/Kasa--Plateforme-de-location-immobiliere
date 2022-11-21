import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Home from './pages/home/home';
import About from './pages/about/about';
import HousingInfo from './pages/housingInfo/housingInfo';
import ErrorPage from './pages/error/error'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(

    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/housing/:id" element={<HousingInfo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>

)