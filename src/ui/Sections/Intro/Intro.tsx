import React from "react";

import avatar from "../../../assets/portrait3.png";

import "./Intro.styles.css";

const Intro: React.FC = () => {
  return (
    <section className="intro">
      <div className="intro__avatar">
        <img
          src={avatar}
          alt="pixel animation"
          style={{
            imageRendering: "pixelated",
            display: "block",
          }}
        />
      </div>

      <div className="intro__ps">
        <p>
          Hello and welcome! My name is Trevor Osterman, and I appreciate you
          taking the time to view my portfolio.
        </p>
        <p>
          I am a full stack web developer with experience in loads of fun and
          useful tools and technologies. My journey with engineering so far has
          been a fun and rewarding experience, and I'm always looking for new
          opportunities to learn and grow.
        </p>
        <p>
          When you're ready, scroll down and I'll tell you a bit more about
          myself.
        </p>
      </div>
    </section>
  );
};

export default Intro;
