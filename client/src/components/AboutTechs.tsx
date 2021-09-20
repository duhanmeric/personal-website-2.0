import React from "react";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import SASS from "../assets/sass.svg";
import JS from "../assets/js.svg";
import REACT from "../assets/react.svg";
import NODE from "../assets/node.svg";

const AboutTechs: React.FC = () => {
  const techs = [
    {
      id: 0,
      img: HTML,
      name: "HTML",
    },
    {
      id: 1,
      img: CSS,
      name: "CSS",
    },
    {
      id: 2,
      img: SASS,
      name: "SASS",
    },
    {
      id: 3,
      img: JS,
      name: "JAVASCRIPT",
    },
    {
      id: 4,
      img: REACT,
      name: "REACT",
    },
    {
      id: 5,
      img: NODE,
      name: "NODEJS",
    },
  ];

  return (
    <div id="about-techs">
      <h1 className="about-techs-title">Favorite Techs</h1>
      <div
        className="row techs-row mx-0"
        data-aos="fade-up"
        data-aos-once="true"
      >
        {techs.map((t) => (
          <div
            key={t.id}
            className="col-sm-10 col-md-8 col-lg-5 col-xl-3 col-xxl-3 techs-img-col"
          >
            <div className="techs-img-wrapper">
              <img src={t.img} alt="" />
            </div>
            <div className="tech-names">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTechs;
