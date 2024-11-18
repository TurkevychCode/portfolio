import { motion } from "framer-motion";

const Links = ({ onCloseSidebar }) => {
  const items = ["Home page", "Services", "Portfolio", "About", "Contact"];
  const variants = {
    open: { transition: { staggerChildren: 0.1 } },
    closed: { transition: { staggeredChildren: 0.05, staggeredDirection: -1 } },
  };
  const itemVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: 50, opacity: 0 },
  };
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCloseSidebar}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
