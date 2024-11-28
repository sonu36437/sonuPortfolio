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
    <div className="bg-black text-white py-16 px-8">
  
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, x: -500 }}
     
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.5}}
      >
        <h2 className="text-4xl font-bold text-yellow-400">About Me</h2>
        <p className="text-gray-400 mt-4">
          I’m a web and mobile developer passionate about building responsive
          and interactive applications that solve real-world problems.
        </p>
      </motion.div>

     
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
     
        <motion.div
          className="md:w-1/2 text-lg text-gray-300"
          initial={{ opacity: 0, x: 500 }}
     
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.8}}
        >
          <p>
            I specialize in **React**, **Node.js**, and **AWS**, creating
            seamless user experiences and scalable backend solutions. With a
            keen eye for detail and a love for learning, I continually strive to
            stay ahead of industry trends and technologies.
          </p>
          <p className="mt-4">
            When I’m not coding, I enjoy exploring new tools, contributing to
            open-source projects, and sharing my knowledge with the developer
            community.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 grid grid-cols-1 gap-4"
          initial={{ opacity: 0, x: -500 }}
     
          whileInView={{opacity:1, x:0}}
          
          transition={{duration:1.2}}
        >
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-yellow-400">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-md overflow-hidden">
                <motion.div
                  className="bg-yellow-400 h-2"
                  style={{ width: skill.level }}
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                transition={{duration:3}}
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default AboutSection;
