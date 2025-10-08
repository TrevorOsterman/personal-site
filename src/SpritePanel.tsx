import React from "react";
import spriteOpen from "./avi-open.png";
import spriteClosed from "./avi-closed.png";
import { useState, useEffect } from "react";

interface SpritePanelProps {
  frames?: string[]; // array of image URLs, length should be 2 here
  width?: number; // width in pixels
  height?: number; // height in pixels
  interval?: number; // time between frames in ms
  text?: string[];
}

const SpritePanel: React.FC<SpritePanelProps> = ({
  frames = [spriteOpen, spriteClosed],
  width = 64,
  height = 64,
  interval = 500,
  text = ["Speech"],
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [frames.length, interval]);

  return (
    <div className="sprite-panel">
      <div className="speech">
        {text.map((paragraph) => (
          <p>{paragraph}</p>
        ))}
      </div>
      <img
        className="sprite-panel__img"
        src={frames[currentFrame]}
        alt="pixel animation"
        width={width}
        height={height}
        style={{
          imageRendering: "pixelated", // preserves pixel art
          display: "block",
        }}
      />
    </div>
  );
};

export default SpritePanel;
