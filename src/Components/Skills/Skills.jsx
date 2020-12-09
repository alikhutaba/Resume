import React from "react";
import "./Skills.css";
import Skill from "./Skill";
class Abilities extends React.Component {
  render() {
    return (
      <div className="skills" id="Skills">
        <div className="container">
          <h1 className="skills-title">Skills</h1>
          <hr style={{ marginBottom: "50px" }}></hr>

          <div className="row">
            {/* LEFT */}
            <div className="col-sm-6 skils-col">
              <Skill name="java" percent="90"></Skill>
              <Skill name="C" percent="100"></Skill>
              <Skill name="C++" percent="85"></Skill>
              <Skill name="Python" percent="70"></Skill>
              <hr></hr>
              <Skill name="My SQL" percent="100"></Skill>
              <Skill name="PostgreSQL" percent="90"></Skill>
              <Skill name="H2 Database" percent="80"></Skill>
              <Skill name="Firebase" percent="60"></Skill>
              <hr></hr>
            </div>

            {/* RIGHT */}
            <div className="col-sm-6 skils-col">
              <Skill name="Android" percent="85"></Skill>
              <Skill name="Swift" percent="40"></Skill>
              <hr></hr>
              <Skill name="React / Redux" percent="85"></Skill>
              <Skill name="JavaScript" percent="85"></Skill>
              <Skill name="HTML(5)" percent="100"></Skill>
              <Skill name="CSS(3)" percent="100"></Skill>
              <Skill name="Bootstrap(4)" percent="100"></Skill>
              <Skill name="jquery" percent="10"></Skill>
              <hr></hr>

              {/* ----------------- */}
            </div>
          </div>

          <div className="row">
            {/* LEFT */}
            <div className="col-sm-6 skils-col">
              <Skill name="Spring Boot" percent="100"></Skill>
              <Skill name="Spring Security" percent="30"></Skill>
              <Skill name="RESTful API" percent="100"></Skill>
              <Skill name="Maven" percent="100"></Skill>
              <Skill name="Git" percent="100"></Skill>
            </div>
            {/* RIGHT */}
            <div className="col-sm-6 skils-col">
              <Skill name="OOP" percent="100"></Skill>
              <Skill name="Linux" percent="50"></Skill>
              <Skill name="Agile (Scrum)" percent="80"></Skill>
              <Skill name="Trello" percent="100"></Skill>
              <Skill name="Overleaf" percent="100"></Skill>
            </div>
          </div>

          <div
            className="progress animation-progress"
            style={{ height: "25px" }}
          >
            <div className="progress-bar animation-progress-bar">
              <div className="progress-text"> Self Learning - 100%</div>
            </div>
          </div>
          {/* --------Languages--------- */}
          <div className="row">
            {/* Arabic */}
            <div className="col-sm-4">
              <div className="row skill">
                <span className="col-sm-1"></span>
                <span className="col-sm-3 skill-name">Arabic</span>
                <span className="col-sm-7 skill-progress">
                  <div className="progress language-progress ">
                    <div className="progress-bar" style={{ width: "100%" }}>
                      Native
                    </div>
                  </div>
                </span>
                <span className="col-sm-1"></span>
              </div>
            </div>

            {/* Hebrew */}
            <div className="col-sm-4">
              <div className="row skill">
                <span className="col-sm-1"></span>
                <span className="col-sm-3 skill-name">Hebrew</span>
                <span className="col-sm-7 skill-progress">
                  <div className="progress language-progress">
                    <div className="progress-bar" style={{ width: "95%" }}>
                      Fluent
                    </div>
                  </div>
                </span>
                <span className="col-sm-1"></span>
              </div>
            </div>

            {/* English */}
            <div className="col-sm-4">
              <div className="row skill">
                <span className="col-sm-1"></span>
                <span className="col-sm-3 skill-name">English</span>
                <span className="col-sm-7 skill-progress">
                  <div className="progress language-progress">
                    <div className="progress-bar" style={{ width: "90%" }}>
                      Fluent
                    </div>
                  </div>
                </span>
                <span className="col-sm-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Abilities;
