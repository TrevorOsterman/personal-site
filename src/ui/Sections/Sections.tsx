import React, { useEffect, useRef } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

import "./Sections.styles.css";

type Props = {
  currentSection: string;
  dialog: string[];
  setCurrentSection: (section: string) => void;
  setDialog: (dialog: string[]) => void;
};

const Sections: React.FC<Props> = ({
  currentSection,
  dialog,
  setCurrentSection,
  setDialog,
}) => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section-id");
          if (sectionId) {
            setCurrentSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setCurrentSection]);

  const registerSection = (id: string) => (element: HTMLElement | null) => {
    sectionsRef.current[id] = element;
  };

  return (
    <div className="sections-container">
      <SectionHeading title={currentSection} text={dialog} />
      <div className="sections-content">
        <Section
          id="about"
          sectionRef={registerSection("about")}
          setCurrentSection={setCurrentSection}
        >
          <p>More stuff here about me</p>
        </Section>
        <Section
          id="experience"
          sectionRef={registerSection("experience")}
          setCurrentSection={setCurrentSection}
        >
          <p>Work experience content</p>
        </Section>
        <Section
          id="projects"
          sectionRef={registerSection("projects")}
          setCurrentSection={setCurrentSection}
        >
          <p>Projects content</p>
        </Section>
      </div>
    </div>
  );
};

export default Sections;
