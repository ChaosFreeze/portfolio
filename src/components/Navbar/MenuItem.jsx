import {motion} from 'framer-motion';

// TODO : use framer motion instead of tailwind

const MenuItem = ({ mobileOpenState, isMobile }) => {

  const listVariant = {
    close: {
      x: -600,
    },
    open: {
      x: 0,
      transition: {
        duration: 0.6,
        delayChildren: 1.2,
      }
    }
  }

  const itemVariant = {
    out: {
      x: -600
    },
    in: {
      x: 0
    }
  }
  
  const mobileStyling = () => {
    if (isMobile) {
      return mobileOpenState ? "block" : "hidden";
    } else {
      return "block";
    }
  }

  return (
    <motion.div className={`absolute text-green-600 text-xl z-10 left-0 backdrop-blur-sm bg-white/30 w-full sm:static ${mobileStyling()}`} layout>
      <motion.ul variants={listVariant} animate="open" className="m-20 flex flex-col items-center gap-10 sm:flex-row sm:m-0">
        <motion.li variants={itemVariant}>Home</motion.li>
        <motion.li>About</motion.li>
        <motion.li>Contact</motion.li>
        <motion.li>Projects</motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default MenuItem;
