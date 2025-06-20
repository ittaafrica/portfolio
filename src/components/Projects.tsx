import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-3">
                      <span className="px-3 py-1 bg-primary-light dark:bg-primary-dark text-white rounded text-sm cursor-pointer">
                        Demo
                      </span>
                      <span className="px-3 py-1 bg-gray-800 text-white rounded text-sm cursor-pointer">
                        GitHub
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded text-xs ${
                        tag === 'Python' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' :
                        tag === 'TensorFlow' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' :
                        tag === 'Computer Vision' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100' :
                        tag === 'C++' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100' :
                        tag === 'CUDA' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100' :
                        'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            View All Projects
            <ArrowRight className="ml-2" size={16} />
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Projects;