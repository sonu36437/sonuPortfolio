import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: "90%" },
  { name: "React", level: "85%" },
  { name: "Node.js", level: "80%" },
  { name: "MongoDB", level: "75%" },
  { name: "React Native", level: "70%" },
];

const AboutSection = () => {
  return (
    <AnimatePresence>
      <div className="bg-black text-white min-h-screen w-full py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#AFE1AF]">About Me</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              I'm a web and mobile developer passionate about building responsive
              and interactive applications that solve real-world problems.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            <motion.div
              className="w-full lg:w-1/2 text-sm md:text-base text-gray-300 space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="max-w-xl">
                I specialize in <span className="font-semibold">React</span>, 
                <span className="font-semibold">Node.js</span>, and 
                <span className="font-semibold">AWS</span>, creating
                seamless user experiences and scalable backend solutions. With a
                keen eye for detail and a love for learning, I continually strive to
                stay ahead of industry trends and technologies.
              </p>
              <p className="max-w-xl">
                When I'm not coding, I enjoy exploring new tools, contributing to
                open-source projects, and sharing my knowledge with the developer
                community.
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="w-full max-w-xl mx-auto lg:mx-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200 text-sm md:text-base">{skill.name}</span>
                    <span className="text-[#AFE1AF] text-sm md:text-base">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-[#AFE1AF] h-full rounded-full"
                      style={{ width: skill.level }}
                      initial={{ width: 0 }}
                      animate={{ width: skill.level }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default AboutSection;
