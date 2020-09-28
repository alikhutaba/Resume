import React from "react";
import "./Contact.css";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { VscMail } from "react-icons/vsc";
import { MdPhoneIphone } from "react-icons/md";

class Contact extends React.Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <div className="container">
          <h1 className="contact-title">Contact</h1>

          <hr></hr>

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

          <a
            className="mail"
            href="mailto:khutaba.ali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscMail size={90}></VscMail>
          </a>

          <a
            className="phone"
            href="tel:+972502862222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdPhoneIphone size={90}></MdPhoneIphone>
          </a>
          <h6
            style={{
              display: "block",
              marginTop: "3vw",
              marginBottom: "2vw",
              fontFamily: "Lato",
            }}
          >
            <a
              href="mailto:khutaba.ali@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ali.Khutaba@gmail.com
            </a>
          </h6>

          <h6
            style={{
              display: "block",
              marginTop: "3vw",
              marginBottom: "2vw",
              fontFamily: "Lato",
            }}
          >
            <a
              href="tel:+972502862222"
              target="_blank"
              rel="noopener noreferrer"
            >
              +972 50-286-2222
            </a>
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
              href="https://drive.google.com/file/d/13jxcD3Wnd3WUzmWm8oWkxQIBYm7IBJKN/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF Resume
            </a>
          </h4>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default Contact;
