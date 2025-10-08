import React from "react";
import Section from "./Section";

import "./Sections.styles.css";

const Sections: React.FC = () => {
  return (
    <div className="sections-container">
      <Section title="Experience" speechText={["My Experience"]}>
        <p>Stuff here</p>
      </Section>
      <Section title="Education" speechText={["My Education"]}>
        <p>More stuff here</p>
      </Section>
    </div>
  );
};

export default Sections;
