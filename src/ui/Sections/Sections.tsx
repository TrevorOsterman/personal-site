import React, { useEffect, useRef } from "react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import tinfy from "../../assets/tinfy.png";

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
    const dialogMap: { [key: string]: string[] } = {
      about: ["Here's some additional information about me."],
      experience: ["Let me tell you about my work experience."],
      projects: ["Check out some of my recent projects."],
    };

    if (dialogMap[currentSection]) {
      setDialog(dialogMap[currentSection]);
    }
  }, [currentSection, setDialog]);

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
          id="experience"
          sectionRef={registerSection("experience")}
          setCurrentSection={setCurrentSection}
        >
          <p>
            I am currently a senior software engineer at a software consultancy
            in Phoenix, AZ called Synapse Studios.
          </p>
          <p>
            I currently work on a variety of tasks including building and
            maintaining new features and functionality for both our client's
            eCommerce platform as well as internal tooling. Our focus is on
            implementing new features to facilitate the growth of our client's
            business by enhancing user experience and optimizing performance in
            a scalable manner. I also assume responsibility for bridging the gap
            between the technical aspects of development and the business
            objectives of our clients, ensuring that our solutions are clear and
            align with their goals.
          </p>
          <p>
            Here is a short, non-exhaustive list of technologies I work with and
            am fluent in:
          </p>
          <div className="tech-list">
            <ul className="tech-list__ul">
              <h3>Frontend:</h3>
              <li>React</li>
              <li>TypeScript</li>
              <li>Redux</li>
              <li>Tanstack</li>
              <li>HTML/CSS</li>
            </ul>
            <ul className="tech-list__ul">
              <h3>Middleware:</h3>
              <li>Node.js</li>
              <li>Knex</li>
              <li>Jest</li>
              <li>Express</li>
              <li>Hapi/Joi</li>
            </ul>
            <ul className="tech-list__ul">
              <h3>Backend:</h3>
              <li>Postgres</li>
              <li>TablePlus</li>
            </ul>
            <ul className="tech-list__ul">
              <h3>Services/Other:</h3>
              <li>AWS</li>
              <li>Docker</li>
              <li>Git/GitHub</li>
              <li>PostHog</li>
              <li>DataDog</li>
              <li>Figma</li>
              <li>Jira</li>
            </ul>
          </div>
        </Section>
        <Section
          id="projects"
          sectionRef={registerSection("projects")}
          setCurrentSection={setCurrentSection}
        >
          <p>In my spare time, I'm currently working on a project or two.</p>
          <div>
            <h3>
              <i>This Is Not For You</i>
            </h3>
            <p>
              <i>"This Is Not For You"</i> is a pet project of mine where I am
              loosely adapting the novel "House of Leaves" by Mark Z.
              Danielewski into an interactive, web-based text adventure in the
              style of old text-adventure games. The project is a work in
              progress, but you can check it out{" "}
              <a
                href="https://trevorosterman.github.io/this-is-not-for-you/"
                target="_blank"
              >
                here
              </a>
              .
            </p>
            <img
              className="section__image"
              src={tinfy}
              alt="This Is Not For You"
            />
          </div>
        </Section>
        <Section
          id="about"
          sectionRef={registerSection("about")}
          setCurrentSection={setCurrentSection}
        >
          <p>More stuff here about me</p>
        </Section>
      </div>
    </div>
  );
};

export default Sections;
