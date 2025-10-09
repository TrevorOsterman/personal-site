import React from "react";
import Sprite from "../Sprite/Sprite";

const SectionHeading: React.FC<{
  title: string;
  text: string[];
  displaySprite?: boolean;
}> = ({ title, text, displaySprite }) => {
  return (
    <div className="sections-nav">
      <h2>{title}</h2>
      {displaySprite && <Sprite text={text} />}
    </div>
  );
};

export default SectionHeading;
