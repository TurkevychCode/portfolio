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
          <a
            href="https://www.instagram.com/vitaliik.st/profilecard/?igsh=a25tZnhxbGIwNWt3"
            target="_blank"
          >
            <img src="./instagram.png" alt="Ins" />
          </a>
          <a href="https://github.com/TurkevychCode" target="_blank">
            <img src="./github.png" alt="Github" />
          </a>
          <a
            href="https://www.facebook.com/vitalik.turkevych.3/"
            target="_blank"
          >
            <img src="./facebook.png" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
