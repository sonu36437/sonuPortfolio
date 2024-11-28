import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-xl font-bold text-white">Sonu kumar</div>

   
        <div className="flex space-x-4">
      
          <a
            href="https://linkedin.com/in/sonu-kumar-11b789245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-blue-400 transition"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>

          <a
            href="https://github.com/sonu36437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>

          <a
            href="mailto:sonu36437@gmail.com"
            className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-red-400 stransition"
          >
            <FaEnvelope className="mr-2" /> Mail
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
