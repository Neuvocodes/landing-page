import React from "react";
import "./Experience.css";

import experence_image from "../../assets/images/experience_image.png";

const Experience: React.FC = () => {
  return (
    <div className="experience" id="experience">
      <h3>What People Say</h3>
      <img src={experence_image} alt="" />
      <div className="experience-descrip">
        <span>“</span>
        <p>
          I have been working with NeuovoCode for over a year now and I am
          extremely happy with the work they have done. Their communication is
          excellent and they are always available to answer questions. They have
          been very patient with me and my many requests. I highly recommend
          NeuovoCode for any project you may have. They are very professional
          and do excellent work.
        </p>
      </div>

      <div className="experience-user">
        <h4>John Doe</h4>
        <h5>CEO of Company</h5>
      </div>
    </div>
  );
};

export default Experience;
