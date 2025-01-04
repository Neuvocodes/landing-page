import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-image">
        <h3>Make Your Business Stand Out With Our Product</h3>
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="message"
              id="message"
              required
              placeholder="Send Your Message"
              className="form-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
