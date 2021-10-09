import React, { Component } from "react";
import { contactUS } from "../../../Services";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

class ContactUsPopupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.baseState = this.state;
  }

  handleChange = (type) => (event) => {
    let value = event;
    if (event.target) {
      value = event.target.value;
    }
    this.setState({ [type]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    contactUS(this.state)
      .then((res) => {
        toast.success(" Votre message a été envoyé..", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        this.setState({ ...this.baseState });
      })
      .catch((err) => {
        toast.warn(err, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err);
      });
  };
  render() {
    return (
      <div className="popup-box">
        <div className="box">
          <div className="controleHeaderPopup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="IconContactUs"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <h1 className="ContactNousHeader">Contactez-nous</h1>
          </div>
          <span className="close-icon" onClick={this.handleClose}>
            x
          </span>
          <div className="box-2">
            <div className="shadow-lg">
              <div className="ContactForm">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center">
                      <div className="contactForm">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                          {/* Row 1 of form */}
                          <div className=" row formRow">
                            <div className="col-6">
                              <input
                                type="text"
                                name="name"
                                className="form-control formInput"
                                placeholder="Name"
                                onChange={this.handleChange("name")}
                                value={this.state.name}
                              ></input>
                            </div>
                            <div className="col-6">
                              <input
                                type="email"
                                name="email"
                                className="form-control formInput"
                                placeholder="Email address"
                                onChange={this.handleChange("email")}
                                value={this.state.email}
                              ></input>
                            </div>
                          </div>
                          {/* Row 2 of form */}
                          <div className="row formRow">
                            <div className="col">
                              <input
                                type="text"
                                name="subject"
                                className="form-control formInput"
                                placeholder="Subject"
                                onChange={this.handleChange("subject")}
                                value={this.state.subject}
                              ></input>
                            </div>
                          </div>
                          {/* Row 3 of form */}
                          <div className="row formRow">
                            <div className="col">
                              <textarea
                                rows={3}
                                name="message"
                                className="form-control formInput"
                                placeholder="Message"
                                onChange={this.handleChange("message")}
                                value={this.state.message}
                              ></textarea>
                            </div>
                          </div>
                          <button className="submit-btn" type="submit">
                            Submit
                          </button>
                          <ToastContainer />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsPopupForm;
