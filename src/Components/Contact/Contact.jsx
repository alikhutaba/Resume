import React from "react";
import "./Contact.css";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { VscMail } from "react-icons/vsc";
import { MdPhoneIphone } from "react-icons/md";
// import { FcLike } from "react-icons/fc";
// import { FcDislike } from "react-icons/fc";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <div className="container">
          <h1 className="contact-title">Contact</h1>

          <hr></hr>

          <div className="row">
            <div className="col-sm-6">
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/ali-khutaba-843627173/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin size={70}></SiLinkedin>
              </a>
              <a
                className="github"
                href="https://github.com/alikhutaba"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={70}></SiGithub>
              </a>
            </div>

            <div className="col-sm-6">
              <a
                className="mail"
                href="mailto:khutaba.ali@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VscMail size={70}></VscMail>
              </a>

              <a
                className="phone"
                href="tel:+972502862222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdPhoneIphone size={70}></MdPhoneIphone>
              </a>
            </div>
          </div>
          <h6
            style={{
              display: "block",
              marginTop: "3vw",
              marginBottom: "2vw",
              fontFamily: "Lato",
              fontWeight: "bold",
            }}
          >
            Ali.Khutaba@gmail.com
          </h6>

          <h6
            style={{
              display: "block",
              marginTop: "3vw",
              marginBottom: "2vw",
              fontFamily: "Lato",
              fontWeight: "bold",
            }}
          >
            +972 50-286-2222
          </h6>

          <h4
            style={{
              display: "block",
              marginTop: "3vw",
              marginBottom: "2vw",
              fontFamily: "Lato",
            }}
          >
            <a
              href="https://drive.google.com/file/d/1PtntaKoMsGacKZUg7RET8X0Q-i_DFhlQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF Resume
            </a>
          </h4>
          <hr></hr>

          {/* <a className="" href="" target="_blank" rel="noopener noreferrer">
            <FcLike size={70}></FcLike>
          </a> */}
        </div>
      </div>
    );
  }
}

export default Contact;
