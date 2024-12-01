import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    to: '',
    text: ''
  });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [serverMessage, setServerMessage]=React.useState("");
  const [sending ,setSending]=React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('https://my-mailer-iota.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          text: formData.text,
          name: formData.name
        }),
      });
      const data = await response.json(); // Get the response data
       setServerMessage(data.message);// Log the server message
      setSending(false);
      setIsModalOpen(true);

      if (response.ok) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error:', error); // Log any errors
      setSending(false);
    }
  };

  return (
    <div className="bg-black text-white py-16 px-8" id="contact">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold text-[#AFE1AF] text-center mb-12">Let's Connect</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.input
              type="text"
              placeholder="Name"
              name='name'
              className="bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AFE1AF]"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AFE1AF]"
              whileFocus={{ scale: 1.02 }}
              onChange={handleChange}
            />
          </div>
          <motion.textarea
            name="text"
            placeholder="Message"
            rows="6"
            className="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AFE1AF]"
            whileFocus={{ scale: 1.02 }}
            onChange={handleChange}
          />
          <motion.button
            onClick={handleSubmit}
            className="w-full bg-[#AFE1AF] text-black py-3 rounded-lg font-bold hover:bg-[#AFE1AF] transition"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
           { !sending?"Send Message":"sending..."}
          </motion.button>
        </form>
      </motion.div>
      
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg">
            <h2 className="text-lg font-bold">{serverMessage}</h2>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection; 