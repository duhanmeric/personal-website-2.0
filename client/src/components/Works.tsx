import React from "react";
import wizard from "../assets/wizard.png";
import pathfinder from "../assets/pathfinder.png";
import photographer from "../assets/photographer.png";
import misket from "../assets/misket.svg";
import Key from "./Key";

const Works: React.FC = () => {
  const works = [
    {
      id: 0,
      name: "Cerez Royale",
      text: "A web game that you can beat your friends with fire as wizards. Other wizards are your enemies. Don't let your friends to get heal.",
      websiteLink: "https://cerezroyale.herokuapp.com/",
      githubLink: "https://github.com/duhanmeric/browser-game",
      img: wizard,
      date: "2021",
    },
    {
      id: 1,
      name: "A* Pathfinder",
      text: "I developed a pathfinder with A* algorithm. You can select your start and end node through clicking. You can call it as a little simulator.",
      websiteLink: "https://astart-pathfinder.netlify.app/",
      githubLink: "https://github.com/duhanmeric/a-pathfinder",
      img: pathfinder,
      date: "2021",
    },
    {
      id: 2,
      name: "Photographer",
      text: "I made this website for my imaginary photographer John Doe. I decided to make a well designed site.",
      websiteLink: "https://johndoephoto.netlify.app/",
      githubLink: "https://github.com/duhanmeric/photographer",
      img: photographer,
      date: "2021",
    },
    {
      id: 3,
      name: "Misket",
      text: "You can login/logout, you can create your todo list(s) separately, drag&drop top of each other.",
      websiteLink: "https://misket.herokuapp.com/",
      githubLink: "https://github.com/duhanmeric/misket",
      img: misket,
      date: "2020",
    },
  ];

  return (
    <section id="works">
      <h1
        className="text-center works-title"
        style={{ textTransform: "uppercase" }}
      >
        selected <span style={{ fontWeight: "bold" }}>works</span>
      </h1>

      {works.map((w) => (
        <div className="row mx-0 works-row" key={w.id}>
          <div className="col-sm-10 col-md-8 col-lg-5 col-xl-4 col-xxl-4 work-img-col">
            <div className="img-wrapper">
              <img src={w.img} alt="" />
            </div>
          </div>
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-5 work-text-col">
            <div className="work-name">{w.name}</div>
            <div className="work-text">{w.text}</div>
            <div className="keys">
              <Key
                keyIcon="fas fa-level-down-alt"
                keyLink={w.websiteLink}
                isSocialKey={false}
                keyText="website"
              />
              <Key
                keyIcon="fas fa-level-down-alt"
                keyLink={w.githubLink}
                isSocialKey={false}
                keyText="github"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Works;
