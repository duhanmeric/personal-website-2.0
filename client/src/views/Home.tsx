import React from "react";
import Intro from "../components/Intro";
import Works from "../components/Works";

const Home: React.FC = () => {
  return (
    <section id="home">
      <Intro />
      <Works />
    </section>
  );
};

export default Home;
