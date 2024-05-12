import "./ExperienceCards.css";
import TechnologyIcon from "./TechnologyIcon";

const ExperienceCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <p className="time-frame">October 2022 - Present</p>

        <div className="card-content">
          <p className="job-title">Software Engineer | Go Dutch!</p>
          <ul className="summary-list">
            <li className="job-description-bullet">
              Orchestrated project development lifecycle overseeing both
              frontend and backend for mobile application, Go Dutch! from
              concept to deployment, while maintaining high-quality standards
              and adherence to project timelines
            </li>
            <li className="job-description-bullet">
              Used Figma for design and wireframing of UI/UX, providing a
              seamless user experience
            </li>
            <li className="job-description-bullet">
              Integrated Google Places API to retrieve local restaurant
              information, enhancing the app’s utility
            </li>
            <li className="job-description-bullet">
              Employed PostgreSQL as the database management system to store and
              manage data efficiently
            </li>
            <li className="job-description-bullet">
              Employed Expo camera for image capture and storage
            </li>
            <li className="job-description-bullet">
              Integrated Taggun OCR API for receipt image data processing
            </li>
            <li className="job-description-bullet">
              Incorporated a notification system, keeping users updated about
              their bill splits and payments
            </li>
            <li className="job-description-bullet">
              Leveraged various libraries and tools such as React Navigation,
              Redux Toolkit, Axios, Expo, Formik and more
            </li>
          </ul>
          <div className="tech-icons">
            <TechnologyIcon technology="JavaScript" />
            <TechnologyIcon technology="React Native" />
            <TechnologyIcon technology="Node.js" />
            <TechnologyIcon technology="PostgreSQL" />
            <TechnologyIcon technology="Express.js" />
            <TechnologyIcon technology="Expo" />
          </div>
        </div>
      </div>
      <div className="card">
        <p className="time-frame">January 2024 - February 2024</p>

        <div className="card-content">
          <p className="job-title">Software Engineer Intern | Aayats</p>
          <ul className="summary-list">
            <li className="job-description-bullet">
              Employed Flutter for mobile application design
            </li>
            <li className="job-description-bullet">
              Used Figma for design and wireframing of UI/UX, providing a
              seamless user experience
            </li>
            <li className="job-description-bullet">
              Assisted in design and implementation of new features for both iOS
              and Android platforms
            </li>
            <li className="job-description-bullet">
              Collaborated with development team to in creation, testing, and
              maintenance of mobile application
            </li>
          </ul>
          <div className="tech-icons">
            <TechnologyIcon technology="Flutter" />
            <TechnologyIcon technology="Dart" />
            <TechnologyIcon technology="MongoDB" />
            <TechnologyIcon technology="Express.js" />
            <TechnologyIcon technology="Figma" />
          </div>
        </div>
      </div>
      <div className="card">
        <p className="time-frame">April 2018 - Present</p>

        <div className="card-content">
          <p className="job-title">
            Chief Operating Officer/Co-Founder | Breatzke, LLC
          </p>
          <ul className="summary-list">
            <li className="job-description-bullet">
              Founded and managed two ecommerce sites with YTD sales exceeding
              $700,000
            </li>
            <li className="job-description-bullet">
              Successfully managed a monthly marketing budget of $5,000,
              achieving a 150% ROI through targeted campaigns and cost-effective
              strategies
            </li>
            <li className="job-description-bullet">
              Analyzed sales data and implemented inventory optimization
              strategies, reducing excess stock by 25% while ensuring a 90%
              product availability rate
            </li>
            <li className="job-description-bullet">
              Developed and executed strategic plans resulting in a 15% increase
              in revenue and a 10% improvement in overall performance metrics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCards;
