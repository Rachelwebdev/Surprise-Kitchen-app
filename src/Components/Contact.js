import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-box" id="#contact">
        <h1 className="contact-heading">Tell Us Your Favourite Dish 🍽</h1>
        <div className="input-container">
          <input className="name-input" type="text" placeholder="Name" />
          <input className="email-input" type="email" placeholder="Email" />

          <textarea
            name="message"
            id="message"
            cols="60"
            rows="10"
            className="message-input"
          >
            A Note to Our Chef:
          </textarea>
          <button className="contact-btn-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
