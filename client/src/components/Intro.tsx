import React from "react";
import Key from "./Key";

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
      <div className="row mx-0">
        <div className="col-lg-5 col-xl-5 px-0 intro-text-col">
          <h1 id="greetings" data-aos="fade-up">
            HI THERE!🎉
          </h1>
          <h3 id="sub-greetings" data-aos="fade-up">
            I’m <span id="code">duhan meric</span>
            <br />
            <span id="who">who can make minimalist websites</span>
          </h3>
          <div id="social-key-area">
            {socialKeys.map((k) => (
              <Key
                key={k.id}
                keyIcon={k.icon}
                keyLink={k.link}
                isSocialKey={true}
              />
            ))}
          </div>
          <div id="scroll-key-area">
            <Key
              keyIcon="fas fa-level-down-alt"
              keyLink="#"
              isSocialKey={false}
              keyText="scroll"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
