import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./about.scss";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const [activeSection, setActiveSection] = useState("experience");
  const [activeSectionExpSkill, setActiveSectionExpSkill] =
    useState("experience");

  const handleToggleSection = (section) => {
    setActiveSection(section);
  };
  const handleToggleExpSkill = () => {
    setActiveSectionExpSkill((prevSection) =>
      prevSection === "skills" ? "experience" : "skills"
    );
  };
  return (
    <motion.div
      ref={ref}
      id="About"
      className="about"
      style={{ opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="about__title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About me
      </motion.h1>
      <motion.p
        className="about__text"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I have the ability to develop attractive and functional web interfaces.
        With my experience, I am able to perform web development tasks with
        efficiency and professionalism.
      </motion.p>
      <div className="about__container">
        <div className="about__column">
          <div className="about__content-mobile">
            <div className="about__toggle-buttons">
              <button
                className={`about__toggle-button ${activeSection === "soft-skills" ? "active" : ""}`}
                onClick={() => handleToggleSection("soft-skills")}
              >
                Soft Skills
              </button>
              <button
                className={`about__toggle-button ${activeSection === "training" ? "active" : ""}`}
                onClick={() => handleToggleSection("training")}
              >
                Training
              </button>
              <button
                className={`about__toggle-button ${activeSection === "experience" ? "active" : ""}`}
                onClick={() => handleToggleSection("experience")}
              >
                Experience
              </button>
              <button
                className={`about__toggle-button ${activeSection === "skills" ? "active" : ""}`}
                onClick={() => handleToggleSection("skills")}
              >
                Skills
              </button>
            </div>
            {activeSection === "soft-skills" && (
              <motion.div
                className="about__skills"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="about__skills-title">Soft-Skills</h2>
                <ul className="about__skills-list">
                  <li>Effective communication skills</li>
                  <li>Responsibility</li>
                  <li>Team-player</li>
                  <li>Ability to grow fast</li>
                  <li>Adaptability</li>
                  <li>Active listening</li>
                  <li>Problem Solving</li>
                </ul>
              </motion.div>
            )}
            {activeSection === "training" && (
              <motion.div
                className="about__training"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2>T R A N I N G</h2>
                <div className="about__card">
                  <h3>JAVA SCRIPT COMPLEX</h3>
                  <p>Oktenweb, 2021 - 2022</p>
                  <h3>WEBUI / FRONTEND DEVELOPER</h3>
                  <p>SoftServe, 2022 - 2023</p>
                </div>
              </motion.div>
            )}
            {activeSection === "skills" && (
              <motion.div
                className="about__skills"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="about__skills-title">S K I L L S</h2>
                <ul className="about__skills-list">
                  <li>HTML / CSS / JavaScript</li>
                  <li>React / Redux</li>
                  <li>Next.js</li>
                  <li>Redux-toolkit</li>
                  <li>TypeScript</li>
                  <li>Material UI</li>
                  <li>SASS / SCSS</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>GitHub</li>
                  <li>Figma</li>
                  <li>Agile, Scrum</li>
                  <li>Pair Programming</li>
                </ul>
              </motion.div>
            )}
            {activeSection === "experience" && (
              <motion.div
                className="about__experience"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="about__experience-title">E X P E R I E N C E</h2>
                <h3 className="about__experience-role">
                  F R O N T - E N D D E V E L O P E R
                </h3>
                <h4 className="about__experience-date">Feb 2024 - Jun 2024</h4>
                <p className="about__experience-description">
                  Company that provides services to clients on UpWork, Fiverr,
                  etc.
                </p>
                <ul className="about__experience-list">
                  <li>Requirement analysis and clarification;</li>
                  <li>Front-end development;</li>
                  <li>Database administration and website design;</li>
                  <li>Task estimation;</li>
                  <li>Code development and bug fixing;</li>
                  <li>Business logic realization;</li>
                </ul>
              </motion.div>
            )}
          </div>
          <div className="about__content-tablet">
            <div>
              <motion.div
                className="about__section"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2>Soft Skills</h2>
                <ul>
                  <li>Effective communication skills</li>
                  <li>Responsibility</li>
                  <li>Team-player</li>
                  <li>Ability to grow fast</li>
                  <li>Adaptability</li>
                  <li>Active listening</li>
                  <li>Problem Solving</li>
                </ul>
              </motion.div>
              <motion.div
                className="about__section"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h2>T R A N I N G</h2>
                <div className="about__card">
                  <h3>JAVA SCRIPT COMPLEX</h3>
                  <p>Oktenweb, 2021 - 2022</p>
                  <h3>WEBUI / FRONTEND DEVELOPER</h3>
                  <p>SoftServe, 2022 - 2023</p>
                </div>
              </motion.div>
            </div>
            <div>
              <div className="about__column">
                <button
                  className="about__toggle-button"
                  onClick={handleToggleExpSkill}
                >
                  Toggle to{" "}
                  {activeSectionExpSkill === "skills" ? "Experience" : "Skills"}
                </button>

                {activeSectionExpSkill === "skills" ? (
                  <motion.div
                    className="about__skills"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="about__skills-title">S K I L L S</h2>
                    <ul className="about__skills-list">
                      <li>HTML / CSS / JavaScript</li>
                      <li>React / Redux</li>
                      <li>Next.js</li>
                      <li>Redux-toolkit</li>
                      <li>TypeScript</li>
                      <li>Material UI</li>
                      <li>SASS / SCSS</li>
                      <li>Bootstrap</li>
                      <li>jQuery</li>
                      <li>GitHub</li>
                      <li>Figma</li>
                      <li>Agile, Scrum</li>
                      <li>Pair Programming</li>
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    className="about__experience"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h2 className="about__experience-title">
                      E X P E R I E N C E
                    </h2>
                    <h3 className="about__experience-role">
                      F R O N T - E N D D E V E L O P E R
                    </h3>
                    <h4 className="about__experience-date">
                      Feb 2024 - Jun 2024
                    </h4>
                    <p className="about__experience-description">
                      Company that provides services to clients on UpWork,
                      Fiverr, etc.
                    </p>
                    <ul className="about__experience-list">
                      <li>Requirement analysis and clarification;</li>
                      <li>Front-end development;</li>
                      <li>Database administration and website design;</li>
                      <li>Task estimation;</li>
                      <li>Code development and bug fixing;</li>
                      <li>Business logic realization;</li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
