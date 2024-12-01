import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">Sonu kumar</div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation links */}
        <div className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex 
          flex-col 
          md:flex-row 
          absolute 
          md:relative 
          top-16 
          md:top-0 
          left-0 
          md:left-auto 
          w-full 
          md:w-auto 
          bg-black 
          md:bg-transparent 
          p-4 
          md:p-0 
          space-y-4 
          md:space-y-0 
          md:space-x-4
        `}>
          <a
            href="https://linkedin.com/in/sonu-kumar-11b789245"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-blue-400 transition justify-center"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>

          <a
            href="https://github.com/sonu36437"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-gray-400 transition justify-center"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>

          <a
            href="mailto:sonu36437@gmail.com"
            className="flex items-center bg-white text-black px-4 py-2 rounded hover:bg-red-400 transition justify-center"
          >
            <FaEnvelope className="mr-2" /> Mail
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
