import React from "react";
import "./Experience.css";
import { GrLocation } from "react-icons/gr";

class Experience extends React.Component {
  render() {
    return (
      <div className="Experiences" id="Experiences">
        <div className="container">
          <h1 className="experience-title">Experiences</h1>
          <div className="quotes">
            <h5 className="quotes">
              "Experience is one thing you can't get for nothing."
            </h5>
            <h6 className="quotes">paulo coelho</h6>
          </div>

          <hr></hr>
          <h2 className="sub-title">Educations</h2>

          {/* -------------------------Educations---------------------------- */}

          {/* <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">John Bryce College</h4>
              <p className="experience-date">Sep.2019 – Aug.2020</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Jerusalem
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  Full Stack Web Developer
                </h6>
                <p>
                 
                </p>
              </div>
            </div>
          </div> */}

          {/* ----------------------------------------------------- */}

          <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">Afeka College</h4>
              <p className="experience-date">May.2015 – Today</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Tel-Aviv
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  B.Sc. Software Engineering.
                </h6>
                <p className="experience-details">
                  GPA: 85, yearly certificate of excellence.
                </p>
                <div>
                  <h6>2 semesters to graduation.</h6>
                </div>
                <div>
                  <h6>Recommendations will be provided upon request.</h6>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- */}

          <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">Ibn khaldun</h4>
              <p className="experience-date">Oct.2010 – Jun.2013</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Arraba
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  High School Diploma - Major in biology and chemistry
                </h6>
                <p className="experience-details">
                  I graduated highschool, where I enjoyed doing science, math,
                  biology and arts.
                </p>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- */}

          <hr></hr>
          <h2 className="sub-title">Careers</h2>

          {/* -------------------------Careers---------------------------- */}

          <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">Outstanding program</h4>
              <p className="experience-date">Oct.2016 – Jun.2018</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Tel-Aviv
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  Outstanding program "Smart Up" at Afeka College.
                </h6>
                <ul>
                  <li>
                    Designed and constructed a driving simulator adapted for
                    users with cerebral palsy.
                  </li>
                  <li>
                    Research project: “Baras Paradox” demonstration on high
                    voltage electricity grid.
                  </li>
                  <li>
                    Workshops in management and leadership, entrepreneurship,
                    and scientific writing.
                  </li>
                  <li>
                    Lectures in various fields such as electricity and
                    machinery.
                  </li>
                  <li>
                    The program required: Thinking out of the box, self-learning
                    abilities, teamwork, ability to work under pressure, high
                    motivation and responsibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------- */}

          <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">Tutor</h4>
              <p className="experience-date">Oct.2016 – Jun.2018</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Tel-Aviv
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  Data structure grader and Java OOP tutor at Afeka College.
                </h6>
                <p>
                  Selected to grade the data structure course and train Java,
                  OOP and Data Structure courses.
                </p>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- */}

          <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">Coordinator</h4>
              <p className="experience-date">Aug.2016 – October.2019</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Tel-Aviv
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  Coordinator of the Arabs students at Afeka College.
                </h6>
                <p>
                  Work with students, ability to help with their reports,
                  Available most of the time and Full responsibly for them.
                </p>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default Experience;
