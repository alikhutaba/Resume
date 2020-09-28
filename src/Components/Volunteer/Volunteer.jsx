import React from "react";
import "./Volunteer.css";
import { GrLocation } from "react-icons/gr";

class Volunteer extends React.Component {
  render() {
    return (
      <div className="volunteer" id="Volunteer">
        <div className="container">
          <h1 className="volunteer-title">volunteer</h1>
          <div className="quotes">
            <h5 className="quotes">
              "Remember that the happiest people are not those getting more, but
              those giving more."
            </h5>
            <h6 className="quotes">H. Jackson Brown Jr.</h6>
          </div>
          <hr style={{ marginBottom: "50px", marginTop: "30px" }}></hr>

          {/* ----------------------------------------------------- */}

          <div className="row volunteer-row">
            <div className="col-sm-4">
              <h4 className="volunteer-name">Digital Starter</h4>
              <p className="volunteer-date">Sep.2017 – Sep.2019</p>
              <div className="volunteer-location">
                <GrLocation></GrLocation> Online
              </div>
            </div>
            <div className="col-sm-8">
              <h6 className="volunteer-details">
                Participating in the "Digital Starter" program.
              </h6>
              <div className="experience-details">
                accompanying small businesses in the periphery and setting up
                digital tools such as a Wix website, a social networking page,
                and a presence on Google and Waze.
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- */}

          <div className="row volunteer-row">
            <div className="col-sm-4">
              <h4 className="volunteer-name">Volunteer Leadership</h4>
              <p className="volunteer-date">Oct.2015 – Jun.2017</p>
              <div className="volunteer-location">
                <GrLocation></GrLocation> Arraba
              </div>
            </div>
            <div className="col-sm-8">
              <h6 className="volunteer-details">
                Participation in the Volunteer Leadership Program.
              </h6>
              <div className="volunteer-details">
                workshops for high school youth to give them the spirit of
                volunteering and a volunteer days in schools and institutions
                for disabilities.
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default Volunteer;
