import React from "react";
import "./Experience.css";
import { GrLocation } from "react-icons/gr";

class Experience extends React.Component {
  render() {
    return (
      <div className="Experiences" id="Experiences">
        <div className="container">
          <h1 className="experience-title">Experience</h1>
          <div className="quotes">
            <h5 className="quotes">
              "Experience is one thing you can't get for nothing."
            </h5>
            <h6 className="quotes">Paulo Coelho</h6>
          </div>

          <hr></hr>
          <h2 className="sub-title">Education</h2>

          {/* -------------------------Education---------------------------- */}

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
              <p className="experience-date">Oct.2015 – Jun.2021</p>
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
                  GPA: 85, Excelling student with a yearly certificate of excellence.
                </p>
                <div>
                  <h6>Recommendations will be provided upon request.</h6>
                </div>
                <div className="courses">
                  <h6 style={{ fontWeight: "bold" }}>Top Courses:</h6>
                  <h6>
                    Data Structures, Algorithms, Machine learning, OOP, Operating System, Linux, Database Systems, Parallel Computation.
                  </h6>
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
                  High School Diploma.
                </h6>
                <p className="experience-details">
                  Majored in Biology and Chemistry, five-unit level.
                </p>
                <p className="experience-details">
                  Mathematics and English – five-unit level.
                </p>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- */}

          <hr></hr>
          <h2 className="sub-title">Career</h2>

          {/* -------------------------Career---------------------------- */}


          <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">Hackathon</h4>
              <p className="experience-date">Oct.2020 – Dec.2020</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Online
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  Participate in ”Hasoub” hackathon.
                </h6>
                <ul className="list">
                  <li>
                    Our team was in Top 5 in pitching the idea.
                  </li>
                  <li>
                    Built android app for meditation and relaxing.
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1HnJVRiYpspkczX7hNrkIPGIOzrbPh9Lq/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      For our pitch Click Here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>





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
                  “Smart Up” program of outstanding student - Afeka College
                </h6>
                <ul className="list">
                  <li>
                    Designed and constructed a driving simulator adapted for users with CP to
                    make physical therapy more effective and enjoyable.
                  </li>
                  <li>
                    Conducted research about “Baras Paradox” demonstration on high
                    voltage electricity grid.
                  </li>
                  <li>
                    Went through management, leadership, entrepreneurship, and scientific writing workshops and Lectures in various engineer fields such as electricity and machinery.
                  </li>

                  <li>
                    The program required: Thinking out of the box, self-learning
                    abilities, teamwork, ability to work under pressure, high
                    motivation and responsibility.
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=xCZ-_0Aayvk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Driving simulator Click Here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------- */}

          <div className="row experience-row">
            <div className="col-sm-4">
              <h4 className="experience-name">Teaching Assistant</h4>
              <p className="experience-date">Oct.2016 – Jun.2018</p>
              <div className="experience-location">
                <GrLocation></GrLocation> Tel-Aviv
              </div>
            </div>
            <div className="col-sm-8">
              <div className="experience-details">
                <h6 className="experience-details-title">
                  Teaching Assistant at Afeka College of Engineering.
                </h6>
                <ul className="list">
                  <li>
                    Led weekly office hours to 15 students: training OOP, homework assistance.
                  </li>
                  <li>
                    Checked and graded data structures homework for 100+ students.
                  </li>
                </ul>
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
                  Coordinator of the Arab students at Afeka College.
                </h6>
                <ul className="list">
                  <li>
                    Helped Arab students at Afeka College with their various needs.
                  </li>
                  <li>
                    Multiplicated the number of Arabs students per year and reduced the failing
                  percentage of first year students.                  </li>
                </ul>

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
