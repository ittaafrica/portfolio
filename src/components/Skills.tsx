import { motion } from 'framer-motion';
import { Code, Boxes, Wrench, Brain } from 'lucide-react';
import { skillsData } from '../constants';
import { Icon } from 'lucide-react';

const Skills = () => {
  const skillIcons = {
    'Programming Languages': <Code className="mr-3 text-primary-light dark:text-primary-dark" />,
    'Libraries & Frameworks': <Boxes className="mr-3 text-primary-light dark:text-primary-dark" />,
    'Tools & Platforms': <Wrench className="mr-3 text-primary-light dark:text-primary-dark" />,
    'Domain Expertise': <Brain className="mr-3 text-primary-light dark:text-primary-dark" />
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              {skillIcons['Programming Languages']}
              Programming Languages
            </h3>
            <div className="space-y-6">
              {skillsData.languages.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="skill-bar bg-primary-light dark:bg-primary-dark h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              {skillIcons['Libraries & Frameworks']}
              Libraries & Frameworks
            </h3>
            <div className="space-y-6">
              {skillsData.libraries.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="skill-bar bg-primary-light dark:bg-primary-dark h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              {skillIcons['Tools & Platforms']}
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skillsData.tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <div
                    key={tool.name}
                    className="flex items-center p-3 rounded-md bg-gray-50 dark:bg-gray-700"
                  >
                    <Icon className={`text-xl mr-3 text-${tool.color}`} />
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              {skillIcons['Domain Expertise']}
              Domain Expertise
            </h3>
            <div className="space-y-4">
              {skillsData.domains.map((domain) => (
                <div key={domain.name} className="p-3 rounded-md bg-gray-50 dark:bg-gray-700">
                  <span className="font-medium">{domain.name}</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;