import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="p-2" id="intro">
      <div className="flex h-screen flex-col items-center justify-center space-y-4 lg:items-start lg:p-8">
        <h1 className="text-center text-4xl font-bold leading-relaxed lg:text-left lg:text-6xl lg:leading-relaxed">
          Hi, My name is{" "}
          <span className="whitespace-nowrap text-green-500">
            Subin Mohan S
          </span>
          .<br />
          <em>A Software Engineer.</em>
        </h1>
        <a href="#about">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="rounded-lg border-2 border-green-500 px-4 py-2">
            Know More
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Intro;
