import React from "react";
import Intro from "../components/Intro";

interface Props {
  theme: string | null;
}

const Home: React.FC<Props> = ({ theme }) => {
  return (
    <section id="home">
      <Intro theme={theme} />
    </section>
  );
};

export default Home;
