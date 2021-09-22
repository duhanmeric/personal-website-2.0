import React from "react";
import Key from "./Key";
import ReactSVG from "../components/ReactSVG";

const Intro: React.FC = () => {
  const socialKeys = [
    {
      id: 0,
      icon: "fab fa-twitter",
      link: "https://twitter.com/jacynevermind",
    },
    {
      id: 1,
      icon: "fab fa-github",
      link: "https://github.com/duhanmeric",
    },
    {
      id: 2,
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/duhanmeric_/?hl=en",
    },
    {
      id: 3,
      icon: "fab fa-facebook",
      link: "https://www.facebook.com/merickorkmazz/",
    },
  ];

  return (
    <div id="intro">
      <div className="row mx-0 justify-content-center align-items-center">
        <div className="col-lg-5 col-xl-5 px-0 intro-text-col">
          <div
            className="intro-img-container"
            data-aos="fade-up"
            data-aos-once="true"
          >
            <ReactSVG />
          </div>
          <h1
            id="greetings"
            className="text-center"
            data-aos="fade-up"
            data-aos-once="true"
          >
            HI THERE!🎉
          </h1>
          <h3
            id="sub-greetings"
            style={{ fontWeight: "bold" }}
            className="text-center"
            data-aos="fade-up"
            data-aos-once="true"
          >
            I’m <span id="code">duhan meric</span>
            <br />
            <span id="who" style={{ fontWeight: "normal" }}>
              who can make minimalist websites
            </span>
          </h3>
          <div id="social-key-area">
            {socialKeys.map((k) => (
              <Key
                key={k.id}
                keyIcon={k.icon}
                keyLink={k.link}
                typeOfKey="social"
              />
            ))}
          </div>
          <div id="hire-key-area">
            <Key
              keyIcon="fas fa-level-down-alt"
              keyLink="/contact"
              typeOfKey="hire"
              keyText="hire me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
