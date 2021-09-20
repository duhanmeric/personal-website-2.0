import React from "react";
import me from "../assets/me.png";

const AboutMe: React.FC = () => {
  return (
    <div id="about-me">
      <h1 className="about-me-title">My name is Duhan Meric</h1>
      <div className="about-me-img-wrapper">
        <img src={me} alt="" />
      </div>
      <p className="about-me-text">
        I am a web developer and computer engineer student at Duzce University.
        One day I decided to take udemy courses for web development.
        <span>Here I am.</span>
      </p>
    </div>
  );
};

export default AboutMe;
