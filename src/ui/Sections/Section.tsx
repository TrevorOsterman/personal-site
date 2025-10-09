import React from "react";
import SectionHeading from "./SectionHeading";

const Section: React.FC<{
  id: string;
  currentSection: string;
  sectionRef: (element: HTMLElement | null) => void;
  setCurrentSection: (section: string) => void;
  dialog: string[];
  children: React.ReactNode;
}> = ({ id, currentSection, sectionRef, dialog, children }) => {
  return (
    <section className="section" ref={sectionRef} data-section-id={id}>
      <SectionHeading
        title={id}
        text={dialog}
        displaySprite={currentSection === id}
      />
      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;
