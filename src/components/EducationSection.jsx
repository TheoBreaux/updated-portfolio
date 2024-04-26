import "./EducationSection.css";

const EducationSection = () => {
  return (
    <section id="education-section">
      <h2 className="skills-section-title">EDUCATION</h2>
      <div className="education-card-container">
        <div className="education-card">
          <h3 className="education-location">WESTERN GOVERNORS UNIVERSITY</h3>
          <p className="education-info">Salt Lake City, UT (Remote)</p>
          <p className="education-info">
            B.S. - Software Engineering Candidate
          </p>
        </div>
        <div className="education-card">
          <h3 className="education-location">PER SCHOLAS</h3>
          <p className="education-info">Los Angeles, CA (Remote)</p>
          <p className="education-info">
            React Developer Certification
          </p>
        </div>
      </div>

      <div className="education-card-container">
        <div className="education-card">
          <h3 className="education-location">LAKE FOREST COLLEGE</h3>
          <p className="education-info">Lake Forest, IL</p>
          <p className="education-info">
            B.A. - Marketing/Advertising (Independent Scholar)
          </p>
        </div>
        <div className="education-card">
          <h3 className="education-location">COURSERA / GOOGLE</h3>
          <p className="education-info">Los Angeles, CA (Remote)</p>
          <p className="education-info">
            Google Data Analytics Specialization Certification{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
