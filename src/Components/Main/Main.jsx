import React from "react";
import "./Main.css";
import ParticlesBg from "particles-bg";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-scroll";

class Main extends React.Component {
  render() {
    return (
      <div id="Main" className="Main">
        {/* --------------rectangle-------------- */}
        <div className="jumbotron rectangle">
          <p className="name">Ali Khutaba</p>

          <hr className="line"></hr>
          <h4 className="status">Software Engineer Student</h4>
          <Link
            activeClass="active"
            to="Profile"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="scroll">
              <h6 className="scrollText">Resume</h6>
              <div className="scrollIcon">
                <FaAngleDown size={40}></FaAngleDown>
              </div>
            </div>
          </Link>
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
