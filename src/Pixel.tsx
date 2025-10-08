import { useState, useEffect } from "react";

interface PixelAnimatorProps {
  frames: string[]; // array of image URLs, length should be 2 here
  width?: number; // width in pixels
  height?: number; // height in pixels
  interval?: number; // time between frames in ms
}

const PixelAnimator: React.FC<PixelAnimatorProps> = ({
  frames,
  width = 64,
  height = 64,
  interval = 500,
}) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, interval);

    return () => clearInterval(timer);
  }, [frames.length, interval]);

  return (
    <img
      src={frames[currentFrame]}
      alt="pixel animation"
      width={width}
      height={height}
      style={{
        imageRendering: "pixelated", // preserves pixel art
        display: "block",
      }}
    />
  );
};

export default PixelAnimator;
