import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Profile from "./Components/Profile/Profile";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Volunteer from "./Components/Volunteer/Volunteer";

function App() {
  return (
    <div className="App">
      <Main />
      <Navbar />
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <Volunteer />
      <Contact />
      <footer id="footer">
        <h6 className="rights">Copyright © 2020 Ali Khutaba</h6>
      </footer>
    </div>
  );
}

export default App;
