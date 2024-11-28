import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MusicX",
    description: "A Spotify-like app built with React Native.",
    tech: "React Native, TrackPlayer, AsyncStorage",
    link: "#",
  },
  {
    title: "YouTube Downloader",
    description: "A web app to download YouTube videos and audio.",
    tech: "Node.js, YTDL-Core, FFmpeg",
    link: "#",
  },
  {
    title: "Spread",
    description: "A web app for reporting locality issues with admin panel.",
    tech: "React.js, Node.js, MongoDB",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio with animations and Bento layout.",
    tech: "React.js, Tailwind CSS, Framer Motion",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger effect between children
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }, 
};

const ProjectSection = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
   
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-yellow-400">Projects</h2>
        <p className="text-gray-400 mt-4">
          Explore some of the projects I've worked on.
        </p>
      </motion.div>

    
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.1 }} 
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg relative group overflow-hidden"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
          >
        
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">
              {project.title}
            </h3>
         
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          
            <p className="text-gray-500 text-xs">Tech: {project.tech}</p>

          
            <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
           
            <a
              href={project.link}
              className="absolute bottom-4 right-4 text-yellow-400 text-sm underline hover:text-yellow-300"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectSection;
