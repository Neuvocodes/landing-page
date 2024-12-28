import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-image">
        <h3>Make Your Business Stand Out With Our Product</h3>
      </div>

      <div className="form">
        <form method="post">
          <div className="input-group">
            <input
              type="text"
              name="message"
              id="message"
              required
              placeholder="Send Your Message"
              className="form-input"
            />
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
