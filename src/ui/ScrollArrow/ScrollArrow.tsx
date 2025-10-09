import React from "react";
import "./ScrollArrow.styles.css";

type Props = {
  currentSection: string;
};

const ScrollArrow: React.FC<Props> = ({ currentSection }) => {
  const sections = ["intro", "experience", "projects", "about"];
  const currentIndex = sections.indexOf(currentSection);
  const isLastSection = currentIndex === sections.length - 1;

  const scrollToNextSection = () => {
    if (isLastSection) return;

    const nextSection = sections[currentIndex + 1];

    if (nextSection === "about") {
      // Scroll to the sections first
      const sectionsContainer = document.querySelector(".sections");
      if (sectionsContainer) {
        sectionsContainer.scrollIntoView({ behavior: "smooth" });
      }
    } else if (nextSection === "intro") {
      const introElement = document.querySelector(".intro");
      if (introElement) {
        introElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For experience and projects, scroll within sections-content
      const sectionsContainer = document.querySelector(".sections");
      if (sectionsContainer) {
        sectionsContainer.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          const sectionElement = document.querySelector(
            `[data-section-id="${nextSection}"]`,
          );
          if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }
    }
  };

  if (isLastSection) {
    return null; // Don't show arrow on last section
  }

  return (
    <div className="scroll-arrow__container">
      <span className="scroll-arrow__text">
        Next section: {sections[currentIndex + 1]}
      </span>
      <button
        className="scroll-arrow"
        onClick={scrollToNextSection}
        aria-label="Scroll to next section"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollArrow;
