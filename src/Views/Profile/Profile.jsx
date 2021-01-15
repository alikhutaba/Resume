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



          <div className="row">
            <div className="col-sm-4 about-me-col">
              <h2 className="sub-title">About me</h2>

              <div><p className="about-me">Software Engineering Student with honor degree.</p></div>
              <div><p className="about-me">(1 semester to graduation)</p></div>
              <div><p className="about-me">I am a team player, hard-worker, creative thinker, self-learner, and have great communication skills.</p></div>
              <div><p className="about-me">Looking for a new challenge as a Software engineer or a full-stack position prefer to the server-side, with the possibility of a Full-time job starting from 01/02/2021.</p></div>


            </div>
            <div className="col-sm-5 image-col">
              <img className="proflie-img" src={profliePic} alt="profile"></img>
            </div>
            <div className="col-sm-3 details-col">
              <h2 className="sub-title">Detials</h2>
              <div>
                <h5>Name</h5>
                <h6>Ali Khutaba</h6>
              </div>
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


          <div style={{ textAlign: "center" }}>
            <h5>My dream has always been to be in a position that can affect millions of people around the world, especially in companies with an unlimited vision that reflects my personality.</h5>

          </div>

        </div>
      </div >
    );
  }
}

export default Profile;








/*

  <div className="row">
            <div className="col-sm-6 details-col">
              <div><p className="about-me">Software Engineering Student with honor degree. (1 semester to graduation)⭐️</p></div>
              <div><p className="about-me">I am a team player, hard-worker, creative thinker, self-learner, and have great communication skills.</p></div>
              <div><p className="about-me">Looking for a new challenge as a Software engineer or a full-stack position prefer to the server-side, with the possibility of a Full-time job starting from 01/02/2021.</p></div>
            </div>


*/


/*



  <p className="about-me">
                Hello, I am&nbsp;
  <span className="highlighted">Ali</span>
  &nbsp;khutaba. A&nbsp;
  <span className="highlighted">Software Engineer</span>

  &nbsp;(one semester to graduate).
  <br />
    I am a junior full-stack web developer who loves Structures, Orders, and Algorithms. where spend most of my time learning new things and Turns them into a visualizer project.
    Moreover, teamwork where I can learn faster and deeper, self-learning, and Creative problem solver.
    I am Looking for a new challenge as a Software engineer or a full-stack position prefer to the server-side, with the possibility of a Full-time job. </p>



*/

/*


             <div className="row">
            <div className="col-sm-4 about-me-col">
              <h2 className="sub-title">About me</h2>
              <p className="about-me">
                Hi, I am </p>
              <span className="highlighted">Ali</span>

              <p className="about-me">
                .A Software Engineer student at Afeka College of
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
              <div>
                <h5>Name</h5>
                <h6>Ali Khutaba</h6>
              </div>
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




*/










/*

      <div className="row">

            <div className="col-sm-6 details-col">

              <p className="about-me">
                Hello, I am&nbsp;
              <span className="highlighted">Ali</span>
              &nbsp;khutaba. A&nbsp;
              <span className="highlighted">Software Engineer</span>

              &nbsp;(one semester to graduate).
              <br />
                I am a junior full-stack web developer who loves Structures, Orders, and Algorithms. where spend most of my time learning new things and Turns them into a visualizer project.
                Moreover, teamwork where I can learn faster and deeper, self-learning, and Creative problem solver.
                I am Looking for a new challenge as a Software engineer or a full-stack position prefer to the server-side, with the possibility of a Full-time job. </p>


            </div>


            <div className="col-sm-6 image-col">
              <img className="proflie-img" src={profliePic} alt="profile"></img>
            </div>

          </div>





*/