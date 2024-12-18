import { motion } from "framer-motion";

import "./hero.scss";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleLatestWorksClick = () => {
    const latstWorksSection = document.getElementById("Portfolio");
    if (latstWorksSection) {
      latstWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Vitalii Turkevych</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              onClick={handleLatestWorksClick}
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button onClick={handleContactClick} variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="./scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="./im.png" alt="img" />
      </div>
    </div>
  );
};

export default Hero;
