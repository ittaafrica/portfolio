import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { experience } from '../../constants/index';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Work Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l-2 border-primary-light dark:border-primary-dark"
            >
              <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary-light dark:bg-primary-dark"></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ml-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {exp.company}
                </h4>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex">
                      <Check className="text-primary-light dark:text-primary-dark mt-1 mr-2" size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;