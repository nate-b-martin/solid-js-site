/* eslint-disable import/no-extraneous-dependencies */
import { createEffect, type Component, createSignal } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import NavBar from "./Components/Nav/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";

const App: Component = () => {
  return (
    <div class="appContainer">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
