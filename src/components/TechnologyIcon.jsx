import "./TechnologyIcon.css";
import PropTypes from "prop-types";

const TechnologyIcon = ({ technology }) => {
  return (
    <div className="tech-oval">
      <p className="text">{technology}</p>
    </div>
  );
};

TechnologyIcon.propTypes = {
  technology: PropTypes.string.isRequired,
};

export default TechnologyIcon;
