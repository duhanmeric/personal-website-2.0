import React from "react";

const AboutShow: React.FC = () => {
  const tencityWords = [
    {
      word: "knowledge",
    },
    {
      word: "experience",
    },
    {
      word: "discipline",
    },
  ];

  return (
    <div id="about-show">
      {tencityWords.map((t) => (
        <div key={t.word} className="tencity-text-container" data-aos="fade-up">
          <h1 className="tencity-text glitch" data-text={t.word.toUpperCase()}>
            {t.word.toUpperCase()}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default AboutShow;
