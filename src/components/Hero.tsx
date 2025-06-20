import { motion } from 'framer-motion';
import { Download, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="h-[800px] relative flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ddd6513daa-785603499971d04f9094.png"
            alt="abstract technology pattern"
          />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 text-center z-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Abdullahi Rufai
          <span className="block text-3xl md:text-4xl font-light mt-2">
            ML Engineer & Software Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-6 mb-10 text-gray-600 dark:text-gray-300">
          I solve real-world problems with Python, C++, and Machine Learning
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition shadow-md cursor-pointer"
          >
            <Download className="mr-2" size={18} />
            Download Resume
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition shadow-md cursor-pointer"
            target="_blank"
          >
            <Github className="mr-2" size={18} />
            GitHub
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-md cursor-pointer"
          >
            <Mail className="mr-2" size={18} />
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;