import React from "react";
import "./Contact.css";
import Form from '../../Components/ContactForm/Form'
import Icon from "../../Components/Icon/Icon";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

export default function Contact() {
  return (
    <div className="section" id="Contact" style={{ textAlign: "center", backgroundColor: "#e0e0e0" }}>
      <div className="container">

        <SectionTitle title="Lets work together" quotes="" quotesAuthor=""></SectionTitle>

        <Form></Form>

        <div className="row">

          <div className="col-sm-6">
            <Icon myClassName="linkedin" myHref="https://www.linkedin.com/in/ali-khutaba-843627173/"></Icon>
            <Icon myClassName="github" myHref="https://github.com/alikhutaba"></Icon>
          </div>

          <div className="col-sm-6">
            <Icon myClassName="mail" myHref="mailto:khutaba.ali@gmail.com"></Icon>
            <Icon myClassName="phone" myHref="tel:+972502862222"></Icon>
          </div>

        </div>

        <h6 className="info">Khutaba.Ali@gmail.com</h6>
        <h6 className="info">+972 50-286-2222</h6>

        <button onClick={() => window.open("https://drive.google.com/file/d/1G_VykYITQGpk_IjbpJo9hMW3hnJyHrmE/view?usp=sharing")} type="button" className="btn btn-outline-danger">View full CV</button>

        <hr></hr>

      </div>
    </div >
  );
}


