import { motion } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";

const HeroSection = () => {
  const [commits, setCommits] = useState([
    {
      sha: "abc123",
      commit: { message: "Fix UI issue on homepage" },
      html_url: "https://github.com/your-username/your-repo/commit/abc123",
    },
    {
      sha: "def456",
      commit: { message: "Add dark mode toggle feature" },
      html_url: "https://github.com/your-username/your-repo/commit/def456",
    },
    {
      sha: "ghi789",
      commit: { message: "Refactor API call handling" },
      html_url: "https://github.com/your-username/your-repo/commit/ghi789",
    },
  ]);

  const childVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="hero bg-black h-[100vh] w-full flex flex-col items-center justify-center relative"
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Content */}
        <motion.div
          className="text-center text-white p-10"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I am <span className="text-yellow-400">Sonu Kumar</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10">
            A passionate web and mobile application developer, building modern, responsive, and interactive digital solutions.
          </p>
        </motion.div>

       
      </motion.div>
    </>
  );
};

export default HeroSection;
