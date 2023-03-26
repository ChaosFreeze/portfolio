import { motion } from "framer-motion";
import resume from "../assets/subinmohans.pdf";

// const buttonVar = {
//     hover: {
//         backgroundColor: "white",
//         color: "green"
//     }
// };

const HoverButton = () => {
  return (
    <a href={resume} target="_blank" rel="noreferrer">
      <motion.button
        whileHover={{ backgroundColor: "white", color: "green", duration: 0.2 }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="rounded-lg border-2 border-white px-4 py-2"
      >
        Download Resume
      </motion.button>
    </a>
  );
};

export default HoverButton;
