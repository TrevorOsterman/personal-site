import React, { useState, useEffect } from "react";

import SpritePanel from "./ui/Sprite/Sprite";
import Intro from "./ui/Sections/Intro/Intro";
import Navigation from "./ui/Navigation/Navigation";
import ScrollArrow from "./ui/ScrollArrow/ScrollArrow";
import "./App.styles.css";
import Sections from "./ui/Sections/Sections";

export default function App() {
  const [currentSection, setCurrentSection] = useState("intro");
  const [dialog, setDialog] = useState<string[]>([
    "Hello! I'm Trevor, a software developer based in Phoenix, AZ.",
  ]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection("intro");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const introElement = document.querySelector(".intro");
    if (introElement) {
      observer.observe(introElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navigation currentSection={currentSection} />
      <ScrollArrow currentSection={currentSection} />
      <div className="container">
        <Intro />
        <Sections
          currentSection={currentSection}
          dialog={dialog}
          setCurrentSection={setCurrentSection}
          setDialog={setDialog}
        />
      </div>
    </>
  );
}
