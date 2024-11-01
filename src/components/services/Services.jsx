import { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";

import ServicesModal from "../modals/ServicesModal";

import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const servicesData = [
    {
      title: "Front-End Development",
      description:
        "I create modern, functional web interfaces using technologies such as React and TypeScript. I prioritize efficiency and high performance in all web applications.",
    },
    {
      title: "Optimization and Styling",
      description:
        "I utilize SASS/SCSS, Bootstrap, and other CSS frameworks for adaptive styling. This ensures consistent functionality across different devices and browsers.",
    },
    {
      title: "Technical Collaboration",
      description:
        "I work effectively in Agile and Scrum teams, using GitHub for collaboration and version control. This promotes organization and transparency in projects.",
    },
    {
      title: "Problem-Solving Skills",
      description:
        "I address technical tasks, including task estimation, database management, and bug fixing, to achieve defined business objectives efficiently.",
    },
  ];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const isMobile = window.innerWidth <= 738;

  const openModal = (service) => {
    if (isMobile) {
      setSelectedService(service);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Creative</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="box"
            whileHover={
              !isMobile ? { background: "lightgray", color: "black" } : {}
            }
          >
            <h2>{service.title}</h2>
            <p>
              {isMobile
                ? `${service.description.split(" ").slice(0, 10).join(" ")}...`
                : service.description}
            </p>
            {isMobile ? (
              <button onClick={() => openModal(service)}>Show more</button>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
      <ServicesModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        service={selectedService}
      />
    </motion.div>
  );
};

export default Services;
