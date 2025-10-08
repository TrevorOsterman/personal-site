import React from "react";
import Sprite from "../Sprite/Sprite";

const Section: React.FC<{
  title: string;
  speechText: string[];
  children: React.ReactNode;
}> = ({ title, speechText, children }) => {
  return (
    <section className="section">
      <div className="section__heading-group">
        <h1 className="section__heading">{title}</h1>
        <Sprite text={speechText || ["I'm a placeholder!"]} />
      </div>
      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;
