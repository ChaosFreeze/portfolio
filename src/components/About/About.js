import React from "react";
import subin from "../assets/subin.jpg";
import HoverButton from "../SlidingButton/SlidingButton";

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center bg-green-500 p-16 text-center">
      <h2 className="lg:mb-6 py-2 pb-8 text-3xl font-semibold text-white lg:text-6xl">
        About Me
      </h2>
      <div className="flex flex-col space-y-4 pb-4 lg:flex-row lg:space-x-10 lg:gap-20">
        <div className="flex justify-center px-10">
          <img
            src={subin}
            alt="Subin"
            className="h-auto max-w-xs rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center space-y-4">
          <p className="text-lg text-left">
            Hi! My name is Subin. I am a Mechatronics Engineer turned Software Engineer. I love Robotics, programming, and learning about everything.
          </p>
          <HoverButton />
        </div>
      </div>
    </section>
  );
};

export default About;
