import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Views/Navbar/Navbar";
import Main from "./Views/Main/Main";
import Profile from "./Views/Profile/Profile";
import Experience from "./Views/Experience/Experience";
import Projects from "./Views/Projects/Projects";
import Contact from "./Views/Contact/Contact";
import Skills from "./Views/Skills/Skills";
import Volunteer from "./Views/Volunteer/Volunteer";


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Main />
      <Navbar />
      <Profile />
      <Experience />
      <Projects />
      <Skills />
      <Volunteer />
      <Contact />
      <footer id="footer">
        <h6 className="rights">Copyright © {new Date().getFullYear()} Ali Khutaba</h6>
      </footer>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
