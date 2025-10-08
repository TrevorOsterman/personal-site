import SpritePanel from "./ui/Sprite/Sprite";
import Intro from "./ui/Sections/Intro/Intro";
import "./App.styles.css";
import Sections from "./ui/Sections/Sections";

export default function App() {
  return (
    <div className="container">
      <Intro />
      <Sections />
    </div>
  );
}
