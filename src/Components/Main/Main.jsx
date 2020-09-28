import React from "react";
import "./Main.css";
import ParticlesBg from "particles-bg";
import { FaAngleDown } from "react-icons/fa";

class Main extends React.Component {
  render() {
    return (
      <div id="Main" className="Main">
        {/* --------------rectangle-------------- */}
        <div className="jumbotron rectangle">
          <p className="name">Ali Khutaba</p>

          <hr className="line"></hr>
          <h4 className="status">Software Engineer Student</h4>
          <a href="#Profile">
            <div className="scroll">
              <h6 className="scrollText">Resume</h6>
              <div className="scrollIcon">
                <FaAngleDown size={40}></FaAngleDown>
              </div>
            </div>
          </a>
        </div>
        {/* --------------rectangle-------------- */}

        <ParticlesBg
          className="ParticlesBg"
          color="#ff6600"
          type="cobweb"
          bg={false}
        />
      </div>
    );
  }
}
export default Main;
