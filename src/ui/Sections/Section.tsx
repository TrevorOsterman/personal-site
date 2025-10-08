import React from "react";

const Section: React.FC<{
  id: string;
  sectionRef: (element: HTMLElement | null) => void;
  setCurrentSection: (section: string) => void;
  children: React.ReactNode;
}> = ({ id, sectionRef, children }) => {
  return (
    <section className="section" ref={sectionRef} data-section-id={id}>
      {children}
    </section>
  );
};

export default Section;
