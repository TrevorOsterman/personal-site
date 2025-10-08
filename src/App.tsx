import PixelAnimator from "./Pixel";
import SpritePanel from "./SpritePanel";
import open from "./avi-open.png";
import closed from "./avi-closed.png";
import avatar from "./portrait3.png";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <section className="intro">
        <div className="sprite__container">
          <img
            src={avatar}
            alt="pixel animation"
            style={{
              imageRendering: "pixelated", // preserves pixel art
              display: "block",
            }}
          />
        </div>

        <div className="intro__ps">
          <p>
            Hello! My name is Trevor Osterman, welcome to my interactive resume.
          </p>
          <p>
            I am a full stack web developer with experience in loads of fun and
            useful tools and technologies. My journey with engineering so far
            has been a fun and rewarding experience, and I'm always looking for
            new opportunities to learn and grow.
          </p>
          <p>
            When you're ready, scroll down and I'll tell you a bit more about my
            work experience.
          </p>
        </div>
      </section>
      <section className="section info-section">
        <div className="info-grid">
          <SpritePanel text={["This is what I do!"]} />
          <div className="info-content">
            <h1>Work Experience</h1>
            <p>Stuff here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
