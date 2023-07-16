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
      <motion.div
        whileHover={{ left: "140%" }}
        className="rounded-lg"
      >
        <motion.button
          className="rounded-lg border-2 border-white px-4 py-2"
        >
          Download Resume
        </motion.button>
      </motion.div>
    </a>
  );
};

export default HoverButton;
