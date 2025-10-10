import React from "react";
import "./Navigation.styles.css";

type Props = {
  currentSection: string;
};

const Navigation: React.FC<Props> = ({ currentSection }) => {
  const scrollToSection = (sectionId: string) => {
    const container = document.querySelector(".container");
    let targetElement: HTMLElement | null = null;

    if (sectionId === "intro") {
      targetElement = document.querySelector(".intro");
    } else {
      const sectionsContainer = document.querySelector(".sections");
      if (sectionsContainer) {
        sectionsContainer.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const sectionElement = document.querySelector(
            `[data-section-id="${sectionId}"]`,
          );
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
        return;
      }
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navigation">
      <button
        className={`nav-button ${currentSection === "intro" ? "active" : ""}`}
        onClick={() => scrollToSection("intro")}
      >
        Intro
      </button>
      <button
        className={`nav-button ${
          currentSection === "experience" ? "active" : ""
        }`}
        onClick={() => scrollToSection("experience")}
      >
        Experience
      </button>
      <button
        className={`nav-button ${
          currentSection === "projects" ? "active" : ""
        }`}
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </button>
      <button
        className={`nav-button ${currentSection === "about" ? "active" : ""}`}
        onClick={() => scrollToSection("about")}
      >
        More
      </button>
    </nav>
  );
};

export default Navigation;
