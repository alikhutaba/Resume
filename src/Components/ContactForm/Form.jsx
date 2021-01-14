import React from "react";
import "./Form.css";
import { toast } from 'react-toastify'
import CustomInput from "./CustomInput.js";
import 'react-toastify/dist/ReactToastify.css';
import * as emailjs from "emailjs-com"
require('dotenv').config()
toast.configure()

class Form extends React.Component {


  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm(event) {

    const data = new FormData(event.target);
    toast.configure();
    var valid = true;
    const firstName = data.get("first-name")
    const lastName = data.get("last-name")
    const emailAddress = data.get("email-address")
    const message = data.get("message")

    if (firstName === "") {
      valid = false;
      toast.error("first name required..!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    }
    else if (lastName === "") {
      valid = false;
      toast.error("last name required..!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    }
    else if (emailAddress === "") {
      valid = false;
      toast.error("E-mail Address required..!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    }
    else if (!this.validateEmail(emailAddress)) {
      valid = false;
      toast.error("E-mail Address unvalid..!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    }
    else if (message === "") {
      valid = false;
      toast.error("message required..!", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 })
    }

    return valid;
  }

  validateEmail(email) {
    var validator = require("email-validator");
    return validator.validate(email);
  }


  handleOnSubmit(event) {

    event.preventDefault();

    if (this.validateForm(event)) {

      emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_EMAILJS_USER_ID,
      ).then(() => {
        toast.success("Sent!", { position: toast.POSITION.TOP_CENTER, autoClose: 5000 })
      }, (err) => {
        toast.error("Sorry, we are unable to send the message now, please try later.", { position: toast.POSITION.TOP_CENTER, autoClose: 10000 })
      });
      event.target.reset();
    }
  }


  render() {

    return (

      <form id="myForm" className="card" onSubmit={this.handleOnSubmit}>
        <div className="cardHeader">
          <h5 style={{ color: "white" }}>I am sure that the combination of my skills and motivation with your company vision will lead to the greatest technologies that change the world for the better.</h5>
        </div>

        <div className="row">
          <div className="col-sm-6">

            <CustomInput
              labelText="First Name"
              id="first-name"
              name="first-name"
              formControlProps={{
                fullWidth: true
              }}

            />

          </div>

          <div className="col-sm-6">
            <CustomInput
              labelText="Last Name"
              id="last-name"
              name="last-name"
              formControlProps={{
                fullWidth: true
              }}

            />

          </div>
        </div>

        <CustomInput
          labelText="Email address"
          id="email-address"
          name="email-address"
          formControlProps={{
            fullWidth: true
          }}
        />

        <CustomInput
          labelText="Message"
          id="message"
          name="message"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            multiline: true,
            rows: 5
          }}
        />

        <div className="send-button-div">
          <button className="sendButton">SEND</button>
        </div>
      </form>



    );
  }
}

export default Form;

