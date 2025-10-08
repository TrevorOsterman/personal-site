import React from "react";
import Sprite from "../Sprite/Sprite";

const SectionHeading: React.FC<{
  title: string;
  text: string[];
}> = ({ title, text }) => {
  return (
    <div className="sections-nav">
      <h2>{title}</h2>
      <Sprite text={text} />
    </div>
  );
};

export default SectionHeading;
