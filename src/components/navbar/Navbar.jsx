import { motion } from "framer-motion";

import Sidebar from "../sidebar/Sidebar";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/vitalii-turkevych-60b5281ab/"
            target="_blank"
          >
            <img src="./linkedin.png" alt="linkedIn" />
          </a>
          <a href="https://github.com/TurkevychCode" target="_blank">
            <img src="./github.png" alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
