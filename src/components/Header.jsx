import "./Header.css";
import LinkedInIcon from "../assets/linkedin-icon.png";
import GitHubIcon from "../assets/github-icon.png";
import EmailIcon from "../assets/email-icon.png";
import ResumeIcon from "../assets/resume-icon.png";
import ProfileImage from "../assets/profile-image.jpg";

const Header = () => {
  return (
    <header id="header-section">
      <div id="header-content">
        <h1 className="title">
          Theo Breaux <span className="wave">👋🏾</span>
        </h1>
        <h2 className="subtitle">Frontend Engineer</h2>
        <p className="description">
          I build captivating, intuitive, and user-friendly mobile and web
          applications, creating engaging digital experiences.
        </p>
        {/* 
        <a
          className="social-link-images"
          href="https://github.com/TheoBreaux"
          target="_blank"
        >
          <img src={GitHubIcon} alt="github icon" />
        </a> */}
        <a
          className="social-link-images"
          href="https://www.linkedin.com/in/theobreaux/"
          target="_blank"
        >
          <img src={LinkedInIcon} alt="linkedIn icon" />
        </a>

        <a className="social-link-images" href="mailto:theobreaux@gmail.com">
          <img src={EmailIcon} alt="email icon" />
        </a>

        <a
          className="social-link-images"
          href="https://online-resume-mauve.vercel.app/"
          target="_blank"
        >
          <img src={ResumeIcon} alt="resume icon" />
        </a>
      </div>

      <div id="image-container">
        <img
          id="profile-image"
          src={ProfileImage}
          alt="Profile Image"
          className="profile-image"
        />
      </div>
    </header>
  );
};

export default Header;
