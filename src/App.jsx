import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import LanguagesSection from "./components/LanguagesSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectSection/>
      {/* <LanguagesSection /> */}
 
    </>
  );
};

export default App;
