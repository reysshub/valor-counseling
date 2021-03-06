import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../paginas/Home";

import Services from "../paginas/Services";
import Info from "../paginas/Info";
import Individual from "../paginas/Individual";
import Couples from "../paginas/Couples";
import Family from "../paginas/Family";

import About from "../paginas/About";
import Bio from "../paginas/Bio";
import Rates from "../paginas/Rates";
import Telehealth from "../paginas/Telehealth";
import Polices from "../paginas/Polices";

import Contact from "../paginas/Contact";
import Credentials from "../paginas/Credentials";
import GetInTouch from "../paginas/GetInTouch";
import Location from "../paginas/Location";
import Faqs from "../paginas/Faqs";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/info" element={<Info />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/couples" element={<Couples />} />
        <Route path="/family" element={<Family />} />

        <Route path="/about" element={<About />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/telehealth" element={<Telehealth />} />
        <Route path="/polices" element={<Polices />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="/location" element={<Location />} />
        <Route path="/faqs" element={<Faqs />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default Rutas;
