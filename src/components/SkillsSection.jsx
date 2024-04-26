import "./SkillsSection.css";
import HtmlIcon from "../assets/html5-plain.svg";
import JavaScriptIcon from "../assets/javascript-original.svg";
import CSSIcon from "../assets/css3-original.svg";
import ReactIcon from "../assets/react-original.svg";
import ReactNativeIcon from "../assets/react-native-1.svg";
import GitHubIcon from "../assets/github.png";
import PostgreSQLIcon from "../assets/postgresql-original.svg";
import NodeIcon from "../assets/nodejs.png";

const SkillsSection = () => {
  return (
    <section id="skills-section">
      <h2 className="skills-section-title">SKILLS</h2>
      <div className="skills-card-container">
        <div className="skills-card">
          <img
            className="tech-icons"
            src={JavaScriptIcon}
            alt="javascript icon"
          />
          <p className="tech-text">JavaScript</p>
        </div>
        <div className="skills-card">
          <img className="tech-icons" src={HtmlIcon} alt="html icon" />
          <p className="tech-text">HTML5</p>
        </div>
        <div className="skills-card">
          <img className="tech-icons" src={CSSIcon} alt="css icon" />
          <p className="tech-text">CSS3</p>
        </div>
        <div className="skills-card">
          <img className="tech-icons" src={ReactIcon} alt="react.js icon" />
          <p className="tech-text">React.js</p>
        </div>
      </div>
      <div className="skills-card-container">
        <div className="skills-card">
          <img
            className="tech-icons"
            src={ReactNativeIcon}
            alt="react native icon"
          />
          <p className="tech-text">React Native</p>
        </div>
        <div className="skills-card">
          <img className="tech-icons" src={NodeIcon} alt="node icon" />
          <p className="tech-text">Node</p>
        </div>
        <div className="skills-card">
          <img
            className="tech-icons"
            src={PostgreSQLIcon}
            alt="postgresql icon"
          />
          <p className="tech-text">PostgreSQL</p>
        </div>
        <div className="skills-card">
          <img className="tech-icons" src={GitHubIcon} alt="github icon" />
          <p className="tech-text">Github</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
