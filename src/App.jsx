import "./App.css";
import React from "react";
import { useState } from "react";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";

function App() {
  const [currPage, setCurrPage] = useState("home");

  return (
    <div className="App">
      <Navigation setCurrPage={setCurrPage} />
      <div className="main">
        {currPage === "home" && (
          <Home />
        )}
        {currPage === "projects" && (
          <Projects />
        )}
        {currPage === "skills" && (
          <Skills />
        )}
        {currPage === "contact" && (
          <Contact />
        )}
      </div>
    </div>
  );
}

export default App;
