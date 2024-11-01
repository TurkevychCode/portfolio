import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Mr.Snowman",
    img: "./mr_snowman.png",
    desc: "As part of the course at SoftServe, we created a website for an ice cream shop. Our goal was to allow users to browse a variety of ice cream flavors and easily place orders.The site enables users to view available flavors with descriptions and prices, along with a user-friendly order form. Its responsive design ensures an excellent experience on all devices.",
    url: "https://koldovsky.github.io/753-team-04/",
  },
  {
    id: 2,
    title: "Pizza Shop",
    img: "./pizzashop.png",
    desc: "An online pizza shop built with React and TypeScript, featuring a search bar for finding pizzas by name and a skeleton loader for smoother loading. Users can sort pizzas by price, popularity, or alphabetically and navigate pages with ease. The cart functionality includes quantity adjustments and a prompt to explore the menu if empty. Technologies used: React, TypeScript, SASS, Redux Toolkit, and Axios.",
    url: "https://github.com/TurkevychCode/shop",
  },

  {
    id: 3,
    title: "Bento",
    img: "./bentopoc.png",
    desc: "I collaborated with another front-end developer to create a mobile application that generates photos and facilitates user surveys. The app features a user-friendly interface using React and Material-UI, enabling easy photo customization and survey participation. We utilized Axios for efficient API requests and React Query for real-time data management, ensuring smooth interactions. ",
  },
  {
    id: 4,
    title: "CookBookie",
    img: "./cookbookie.jpg",
    desc: "Recipe Book application allows users to explore a diverse collection of dishes, each with detailed recipes. Users can browse through numerous options, select their favorite dishes, and view the corresponding recipes. The app features sorting capabilities to organize dishes based on various criteria, and a search input field to quickly find specific recipes.",
    url: "https://github.com/TurkevychCode/recipe-app",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="prod" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
