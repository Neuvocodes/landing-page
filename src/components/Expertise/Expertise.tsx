import React from "react";
import { dataExpertise } from "../../types/expertise/expertise";
import "./Expertise.css";

const Expertise: React.FC<dataExpertise> = ({
  color,
  image,
  description,
  name,
}) => {
  return (
    <div className={"container-expertise " + color + "-expertise"}>
      <img className="image-expertise" src={image} alt="" />

      <div className="expertise-body">
        <h4 className="expertise-title">{name}</h4>
        <p className="expertise-description">{description}</p>
      </div>
    </div>
  );
};

const ExpertiseSlider: React.FC<{ expertise: dataExpertise[] }> = ({
  expertise,
}) => {
  return (
    <div className="expertise-component" id="our-expertise">
      <div className="expertise-Ctitle">
        <p>--Our Expertise</p>
        <h3>We Do</h3>
      </div>
      <div className="expertise-slider">
        {expertise.map((expertise, index) => (
          <Expertise key={index} {...expertise} />
        ))}
      </div>
    </div>
  );
};

export { Expertise, ExpertiseSlider };
