import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-full w-48 h-48 mx-auto md:mx-0 overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-lg"
            >
              <img
                className="w-full h-full object-cover"
                src="/images/ray(2).png"
                alt="professional headshot"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-6 leading-relaxed">
              I'm highly skilled tech enthusiast with a diverse experience spanning multiple domains, 
              is a driving force in the world of technology. With a strong foundation in Embedded Systems, 
              Machine Learning, Artificial Intelligence, Internet of Things, Data Science, Software Development, 
              Front-End Web Design and Development, Leadership, and Research Writing.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['Machine Learning', 'Data Science', 'Deep Learning', 'Systems Programming', 'Algorithm Design'].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className={`px-4 py-2 rounded-full text-sm ${
                    skill === 'Machine Learning' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100' :
                    skill === 'Data Science' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' :
                    skill === 'Deep Learning' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100' :
                    skill === 'Systems Programming' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100' :
                    'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;