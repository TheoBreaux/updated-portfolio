import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`line ${showMenu ? "active" : ""}`}></div>
        <div className={`line ${showMenu ? "active" : ""}`}></div>
        <div className={`line ${showMenu ? "active" : ""}`}></div>
      </div>

      <ul className={`nav-links ${showMenu ? "show" : ""}`}>
        <li className="nav-link-item">
          <a className="nav-link" href="#about-section" onClick={hideMenu}>
            ABOUT
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#experience-section" onClick={hideMenu}>
            EXPERIENCE
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#skills-section" onClick={hideMenu}>
            SKILLS
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#education-section" onClick={hideMenu}>
            EDUCATION
          </a>
        </li>
        <li className="nav-link-item">
          <a className="nav-link" href="#projects-section" onClick={hideMenu}>
            PROJECTS
          </a>
        </li>

        <li className="nav-link-item">
          <a
            className="nav-link"
            href="mailto:theobreaux@gmail.com"
            onClick={hideMenu}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
