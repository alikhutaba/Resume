import React from "react";
import "./Profile.css";
import profliePic from "../../images/ali-proflie.png";

class Profile extends React.Component {
  render() {
    return (
      <div className="Profile" id="Profile">
        <div className="container">
          <h1 className="profile-title">Profile</h1>
          <hr></hr>

          <div className="row profile-row">
            <div className="col-sm-4 about-me-col">
              <h2 className="sub-title">About me</h2>
              <p className="about-me">
                Hi, I am ali, a software engineer student at afeka collge of
                engineer, tel-Aviv with 2 semesters to graduation. I am a junior
                full stack web developer who love structure, order and
                algorithms. Also I like working in a team, you'll learn faster
                and much more. I am looking for new challenging as a software
                engineer or a full stack with preffering to server side, with
                possibility to full time.
              </p>
            </div>
            <div className="col-sm-5 image-col">
              <img className="proflie-img" src={profliePic} alt="profile"></img>
            </div>
            <div className="col-sm-3 details-col">
              <h2 className="sub-title">Detials</h2>
              <dir>
                <h5>Name</h5>
                <h6>Ali Khutaba</h6>
              </dir>
              <div>
                <h5>Age</h5>
                <h6>25 Years</h6>
              </div>
              <div>
                <h5>Location</h5>
                <h6>Tel-Aviv, Israel</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
