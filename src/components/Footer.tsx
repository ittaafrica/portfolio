import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          {/* Left Section - Copyright */}
          <div className="mb-6 md:mb-0">
            <motion.p 
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-sm md:text-base"
            >
              &copy; {currentYear} Abdullahi Rufai. All rights reserved.
              <Heart className="ml-2 text-red-500 w-4 h-4" fill="currentColor" />
            </motion.p>
          </div>

          {/* Middle Section - Quick Links */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {[
              { name: 'Home', href: '#hero' },
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' }
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -2, color: '#60A5FA' }}
                className="text-sm md:text-base hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Right Section - Social Links */}
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
          >
            {[
              { icon: Github, url: 'https://github.com/abdullahiyusufrufai' },
              { icon: Linkedin, url: 'https://linkedin.com/in/adullahiysufrufai' },
              { icon: Twitter, url: 'https://twitter.com' },
              { icon: Mail, url: 'mailto:yusufrufaiabdullahi@gmail.com' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gray-700 dark:bg-gray-800 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-light dark:hover:bg-primary-dark transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center text-xs text-gray-500"
        >
          <p>Built with React, Vite, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;