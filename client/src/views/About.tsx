import React from "react";
import AboutMe from "../components/AboutMe";
import AboutShow from "../components/AboutShow";
import AboutTechs from "../components/AboutTechs";

const About: React.FC = () => {
  return (
    <section id="about">
      <AboutShow />
      <AboutMe />
      <AboutTechs />
    </section>
  );
};

export default About;
