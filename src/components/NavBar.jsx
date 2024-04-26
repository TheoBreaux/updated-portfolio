import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link-item">
          <a className="nav-link" href="#about-section">
            ABOUT
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#experience-section">
            EXPERIENCE
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#skills-section">
            SKILLS
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#education-section">
            EDUCATION
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#projects-section">
            PROJECTS
          </a>
        </li>

        <li className="nav-link-item">
          <a className="nav-link" href="mailto:theobreaux@gmail.com">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
