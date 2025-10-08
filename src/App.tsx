import React, { useState } from "react";

import SpritePanel from "./ui/Sprite/Sprite";
import Intro from "./ui/Sections/Intro/Intro";
import "./App.styles.css";
import Sections from "./ui/Sections/Sections";

export default function App() {
  const [currentSection, setCurrentSection] = useState("intro");
  const [dialog, setDialog] = useState<string[]>([
    "Hello! I'm Trevor, a software developer based in Phoenix, AZ.",
  ]);

  return (
    <div className="container">
      <Intro />
      <Sections
        currentSection={currentSection}
        dialog={dialog}
        setCurrentSection={setCurrentSection}
        setDialog={setDialog}
      />
    </div>
  );
}
