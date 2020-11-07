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
                Hi, I am Ali.
                 A Software Engineer student at Afeka College of
                Engineering – Tel Aviv. 
              </p>
              
              <p className="about-me">
                I am a junior full stack web developer who loves Structures, Orders and
                Algorithms. Moreover, teamwork where I can learn faster and deeper.
                </p>
                
              <p className="about-me">
              Looking for a new challenge as a Software engineer or a
                full stack position prefer to server side, possibility to
                Full-time job.
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
