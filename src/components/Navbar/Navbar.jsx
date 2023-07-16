import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import MenuItem from "./MenuItem";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  return (
    <motion.nav className="flex justify-between py-6 px-4">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <AiFillHome className="text-2xl text-green-600" />
      </motion.div>
      <motion.div>
        {isOpen ? (
          <RxCross2
            className="right-0 z-20 text-2xl text-green-600 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <GiHamburgerMenu
            className="right-0 z-20 text-2xl text-green-600 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <MenuItem mobileOpenState={isOpen} isMobile={isMobile} />
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
