import React from "react";
import spriteOpen from "../../assets/avi-open.png";
import spriteClosed from "../../assets/avi-closed.png";
import { useState, useEffect } from "react";

import "./Sprite.styles.css";

interface Props {
  frames?: string[]; // array of image URLs, length should be 2 here
  width?: number; // width in pixels
  height?: number; // height in pixels
  interval?: number; // time between frames in ms
  text?: string[];
}

const Sprite: React.FC<Props> = ({
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
    <div className="sprite">
      <div className="sprite__text">
        {text.map((paragraph, index) => (
          <p key={`paragraph-${index}`}>{paragraph}</p>
        ))}
      </div>
      <img
        className="sprite__img"
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

export default Sprite;
