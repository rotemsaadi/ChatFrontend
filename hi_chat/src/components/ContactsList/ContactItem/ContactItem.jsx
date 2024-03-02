import React from "react";
import ProfilePic from "../../../assets/profilePic1.jpg";
import "./contact-item.css";

export const ContactItem = ({ contact, propfilePic }) => {
  return (
    <div>
      <div className="story-profile">
        <img src={ProfilePic} alt="Contact" className="story-profile-image" />
      </div>
      <p>{contact}</p>
    </div>
  );
};
