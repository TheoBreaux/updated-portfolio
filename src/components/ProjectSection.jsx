import "./ProjectsSection.css";
import FoodLog from "../assets/nutri-goal-tracker-screenshot.png";
import GoDutch1 from "../assets/go-dutch1.png";
import GoDutch2 from "../assets/go-dutch2.png";
import HtmlIcon from "../assets/html5-plain.svg";
import JavaScriptIcon from "../assets/javascript-original.svg";
import CSSIcon from "../assets/css3-original.svg";
import ReactIcon from "../assets/react-original.svg";
import LinkIcon from "../assets/link-icon.png";
import ReactNativeIcon from "../assets/react-native-1.svg";
import GitHubIcon from "../assets/github-logo-black.png";
import PostgreSQLIcon from "../assets/postgresql-original.svg";
import NodeIcon from "../assets/nodejs.png";
import GuessCountryGame from "../assets/guess-country-game.png";
import SpaceAttackGame from "../assets/space-attack-game.png";
import GoDutchTextLogo from "../assets/go-dutch-logo.png";

const ProjectSection = () => {
  return (
    <section id="projects-section">
      <h2 className="project-section-title">PROJECTS</h2>

      <div className="project-card">
        <div className="multiple-image-container">
          <img
            className="project-image"
            src={GoDutch1}
            alt=" Food Log App screenshot"
          />
          <img
            className="project-image"
            src={GoDutch2}
            alt="go dutch mobile app screenshot"
          />
        </div>

        <div className="project-info">
          <a href="">
            <img
              src={GoDutchTextLogo}
              alt="go dutch logo"
              className="go-dutch-text-logo"
            />
          </a>

          <div className="technologies-used">
            <img
              className="icon"
              src={ReactNativeIcon}
              alt="react native icon"
            />
            <img className="icon" src={JavaScriptIcon} alt="JavaScript icon" />
            <img className="icon" src={PostgreSQLIcon} alt="postgresql icon" />
            <img className="icon" src={NodeIcon} alt="nodejs icon" />
          </div>
          <p className="project-description">
            <span className="app-name">Go Dutch!</span> is an interactive,
            collaborative dining bill-splitting, mobile application that
            streamlines the process of dividing restaurant expenses among
            friends. Go Dutch! seamlessly parses receipts, adds diners, and
            distributes costs effortlessly. The intuitive interface offers
            special features like birthday bill-sharing and payment notification
            requests. Elevate your dining experience and impress your friends
            with our professional-grade app!
          </p>
          <div>
            <a
              href="https://github.com/TheoBreaux/go-dutch-react-native"
              target="_blank"
            >
              <img
                className="tiny-icon-link"
                src={GitHubIcon}
                alt="github icon"
              />
            </a>
            <a href="" target="_blank">
              <img className="tiny-icon-link" src={LinkIcon} alt="link icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img
          className="project-image"
          src={FoodLog}
          alt=" Food Log App screenshot"
        />

        <div className="project-info">
          <h3>
            <a
              className="project-title"
              href="https://nutri-goal-tracker.vercel.app/"
            >
              NutriGoalTracker
            </a>
          </h3>
          <div className="technologies-used">
            <img className="icon" src={JavaScriptIcon} alt="JavaScript icon" />
            <img className="icon" src={HtmlIcon} alt="HTML icon" />
            <img className="icon" src={CSSIcon} alt="CSS icon" />
            <img className="icon" src={ReactIcon} alt="React icon" />
          </div>
          <p className="project-description">
            <span className="app-name">NutriGoalTracker</span> is an
            enlightening web application that guides you through the process of
            calculating your ideal calorie and macronutrient intake, tailored to
            your fitness objectives. This application offers an extensive API
            food database, enabling users to effortlessly search for and log
            their meals, while also tracking their remaining daily calorie
            allowance with precision.
          </p>
          <div>
            <a
              href="https://github.com/TheoBreaux/nutri-goal-tracker"
              target="_blank"
            >
              <img
                className="tiny-icon-link"
                src={GitHubIcon}
                alt="github icon"
              />
            </a>
            <a href="https://nutri-goal-tracker.vercel.app/" target="_blank">
              <img className="tiny-icon-link" src={LinkIcon} alt="link icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img
          className="project-image"
          src={GuessCountryGame}
          alt="guess the country game screenshot"
        />

        <div className="project-info">
          <h3>
            <a
              className="project-title"
              href="https://guess-the-country.vercel.app/"
              target="_blank"
            >
              🌍 Guess the Country Game! 🎉
            </a>
          </h3>
          <div className="technologies-used">
            <img className="icon" src={JavaScriptIcon} alt="JavaScript icon" />
            <img className="icon" src={HtmlIcon} alt="HTML icon" />
            <img className="icon" src={CSSIcon} alt="CSS icon" />
            <img className="icon" src={ReactIcon} alt="React icon" />
          </div>
          <p className="project-description">
            <span className="app-name">Guess the Country</span> is an engaging
            and interactive country flag guessing game designed to enhance
            players' knowledge of various national flags. Challenge your flag
            recognition skills by correctly identifying random country flags and
            aim to outscore other players!
          </p>
          <div>
            <a
              href="https://github.com/TheoBreaux/guess-the-country"
              target="_blank"
            >
              <img
                className="tiny-icon-link"
                src={GitHubIcon}
                alt="github icon"
              />
            </a>
            <a href="https://guess-the-country.vercel.app/" target="_blank">
              <img className="tiny-icon-link" src={LinkIcon} alt="link icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img
          className="project-image"
          src={SpaceAttackGame}
          alt="save the universe app screenshot"
        />

        <div className="project-info">
          <h3>
            <a
              className="project-title"
              href="https://sba-308-h-save-the-universe.vercel.app/"
              target="_blank"
            >
              Save the Universe!
            </a>
          </h3>
          <div className="technologies-used">
            <img className="icon" src={JavaScriptIcon} alt="JavaScript icon" />
            <img className="icon" src={HtmlIcon} alt="HTML icon" />
            <img className="icon" src={CSSIcon} alt="CSS icon" />
          </div>
          <p className="project-description">
            <span className="app-name">Save the Universe</span> is an engaging
            and interactive web application game in which you embark on an epic
            mission to defend the universe against an incoming alien invasion.
            This web application boasts a lively and vibrant user interface,
            ensuring an enjoyable and immersive gaming experience.
          </p>
          <div>
            <a
              href="https://github.com/TheoBreaux/SBA_308H_Save_the_Universe"
              target="_blank"
            >
              <img
                className="tiny-icon-link"
                src={GitHubIcon}
                alt="github icon"
              />
            </a>
            <a
              href="https://sba-308-h-save-the-universe.vercel.app/"
              target="_blank"
            >
              <img className="tiny-icon-link" src={LinkIcon} alt="link icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
