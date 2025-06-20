
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, User, BookOpen, Code, Shield, Trophy, ChevronRight, Globe } from 'lucide-react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


const Resume = () => {
  const professionalSummary = `Hardworking and enthusiastic University graduate in Mechatronics and Systems Engineering at the Abubakar Tafawa Balewa University. I seek to use my knowledge of Mechatronics, Computer programming, embedded systems, and communication skills to effectively serve. I am dedicated to becoming a dependable and valuable team member who is willing to learn and accept new challenges. Through my previous experiences, including student leadership, and community training facilitation, I have developed excellent communication, problem-solving, and collaboration skills that I believe would make me a responsible and valuable asset to your team.`;

  const education = [
    {
      institution: "Abubakar Tafawa Balewa University – Bauchi, Nigeria",
      degree: "B. Eng. Mechatronics and Systems Engineering",
      period: "March 2018 – October 2024"
    },
    {
      institution: "Government Secondary School – Jebba, Nigeria",
      degree: "SSCE. Science option",
      period: "January 2008 – June 2014"
    },
    {
      institution: "Muslim Community Nursery and Primary School – Jebba, Nigeria",
      degree: "School Certificate",
      period: "January 2008 – June 2014"
    },
    {
      institution: "Nascomsoft Embedded – Bauchi, Nigeria",
      degree: "Diploma in Embedded system Certificate",
      period: "January 2020 – June 2020"
    }
  ];

  const workExperience = [
    {
      position: "Volunteer Tutor",
      company: "Google Developer Students' Club, ATBU – Bauchi, Nigeria",
      period: "March 2022 – Present",
      points: [
        "Tutored community members on Introduction to Data Science and Machine Learning using python",
        "Actively involved in a team responsible for coordinating student-events"
      ]
    },
    {
      position: "Software and Machine Learning Engineering Tutor (Python, C++ and AI)",
      company: "Nascomsoft Embedded – Bauchi, Nigeria",
      period: "January 2022 – Present",
      points: [
        "Tutored over 74 students on Python and Physical Computing using the Raspberry Pi",
        "Designed the software and control structure for an autonomous weeding machine using Image Recognition on the Raspberry Pi",
        "Implemented a TinyML application using Edge Impulse for Energy harvesting in Aquatic bodies",
        "Wrote a tutorial and code on how to efficiently send IoT data from ESP8266 MCU to MATWORK ThingSpeak (C++ & C)"
      ]
    },
    // Add other work experiences similarly...
  ];

  const projects = [
    {
      title: "Medical Chatbot (LEEMA)",
      description: "Developed a medical chatbot to provide initial medical consultations using NLP to understand and respond to user queries with symptom checker, appointment booking, and health information modules.",
      year: "March 2024"
    },
    {
      title: "Autism Detection using Machine Learning",
      description: "Built a machine learning model for early autism detection using different ML algorithms to classify individuals based on behavioral patterns.",
      year: "August 2024"
    },
    // Add other projects similarly...
  ];

  const leadership = [
    {
      role: "Founder",
      organization: "Readg-ATBU, Nigeria",
      period: "February 2022 – Present",
      description: "Founded a reading and research group for ATBU students, organized orientation sessions and workshops, and fostered a community of knowledge-sharing."
    },
    // Add other leadership roles similarly...
  ];

  const skills = {
    languages: ["Python", "C++", "R", "MATLAB"],
    tools: ["Window", "Linux", "Git", "Azure Cloud", "Google office package"],
    ml: ["Supervised Learning", "Unsupervised Learning", "NLP", "Computer Vision", "OCR"]
  };

  const certifications = [
    "NSE Embedded system certificate",
    "Datacomp Python certificate"
  ];

  const awards = [
    {
      title: "Award of Commitment",
      organization: "Kids Can Code Project",
      date: "August 2023",
      description: "Recognized for dedication and contributions to the Kids Can Code project"
    },
    // Add other awards similarly...
  ];
  
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3
        }
      }
    };
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    };
  
    const cardVariants = {
      hover: {
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }
    };
  
    return (
      <section id="resume" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-400 mb-4">
              My Resume
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my education, experience, and skills
            </p>
          </motion.div>
  
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Header with download button */}
            <div className="bg-gradient-to-r from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-700 p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Abdullahi Rufai</h3>
                <p className="text-blue-100">Mechatronics Engineer & ML Developer</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 bg-white text-primary-light dark:bg-gray-900 dark:text-primary-dark rounded-lg shadow-md"
              >
                <Download className="mr-2" size={18} />
                Download PDF
              </motion.button>
            </div>
  
            <div className="p-8">
              {/* Professional Summary */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark">
                    <User size={24} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">Professional Summary</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{professionalSummary}</p>
                
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
                >
                  {[
                    { label: "Profile", value: "abdullahiyusufrufai.onrender.com", icon: Globe },
                    { label: "GitHub", value: "github.com/abdullahiyusufrufai", icon: FaGithub },
                    { label: "LinkedIn", value: "linkedin.com/in/adullahiysufrufai", icon: FaLinkedin },
                    { label: "Facebook", value: "facebook.com/abdullahi.yusufufai", icon: FaFacebook }
                  ].map((item, i) => {
                    return (
                      <motion.div 
                        key={i}
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        <div className="p-2 rounded-full bg-white dark:bg-gray-600 shadow-sm mr-3">
                          <item.icon className="text-primary-light dark:text-primary-dark" size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                          <a 
                            href={`https://${item.value}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary-light dark:text-primary-dark hover:underline font-medium"
                          >
                            {item.value}
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.section>
  
              {/* Education & Experience Side by Side */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Education */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark">
                      <GraduationCap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Education</h3>
                  </div>
                  
                  <motion.ul variants={containerVariants} className="space-y-6">
                    {education.map((edu, i) => (
                      <motion.li 
                        key={i}
                        variants={itemVariants}
                        className="relative pl-8 pb-6 border-l-2 border-primary-light dark:border-primary-dark"
                      >
                        <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark"></div>
                        <motion.div 
                          whileHover={{ x: 5 }}
                          className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm"
                        >
                          <h4 className="font-bold text-lg">{edu.institution}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                          <p className="text-sm text-primary-light dark:text-primary-dark mt-2">{edu.period}</p>
                        </motion.div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
  
                {/* Work Experience */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark">
                      <Briefcase size={24} />
                    </div>
                    <h3 className="text-2xl font-bold ml-4">Experience</h3>
                  </div>
                  
                  <motion.ul variants={containerVariants} className="space-y-6">
                    {workExperience.map((exp, i) => (
                      <motion.li 
                        key={i}
                        variants={itemVariants}
                        className="relative pl-8 pb-6 border-l-2 border-primary-light dark:border-primary-dark"
                      >
                        <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark"></div>
                        <motion.div 
                          whileHover={{ x: 5 }}
                          className="bg-gray-50 dark:bg-gray-700 p-5 rounded-lg shadow-sm"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-lg">{exp.position}</h4>
                              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                            </div>
                            <span className="text-sm text-primary-light dark:text-primary-dark bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="mt-3 space-y-2">
                            {exp.points.map((point, j) => (
                              <li key={j} className="flex items-start">
                                <ChevronRight className="text-primary-light dark:text-primary-dark mt-1 mr-2 flex-shrink-0" size={16} />
                                <span className="text-gray-600 dark:text-gray-300">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
  
              {/* Projects */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark">
                    <Code size={24} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">Projects</h3>
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover="hover"
                      // variants={cardVariants}
                      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"
                    >
                      <div className="flex items-start mb-4">
                        <div className="p-2 rounded-lg bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark mr-4">
                          <Code size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{project.title}</h4>
                          <p className="text-sm text-primary-light dark:text-primary-dark">{project.year}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <button className="text-primary-light dark:text-primary-dark hover:underline flex items-center text-sm font-medium">
                        View Project <ChevronRight className="ml-1" size={16} />
                      </button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
  
              {/* Skills & Certifications */}
              <motion.section variants={itemVariants} className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Skills */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark">
                        <BookOpen size={24} />
                      </div>
                      <h3 className="text-2xl font-bold ml-4">Skills</h3>
                    </div>
                    
                    <motion.div variants={containerVariants} className="space-y-6">
                      {Object.entries(skills).map(([category, items], i) => (
                        <motion.div key={i} variants={itemVariants}>
                          <h4 className="font-medium mb-3 text-lg">{category.replace(/([A-Z])/g, ' $1')}</h4>
                          <div className="flex flex-wrap gap-3">
                            {items.map((skill, j) => (
                              <motion.span
                                key={j}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm shadow-inner"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
  
                  {/* Certifications & Awards */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark">
                        <Award size={24} />
                      </div>
                      <h3 className="text-2xl font-bold ml-4">Certifications & Awards</h3>
                    </div>
                    
                    <motion.div variants={containerVariants} className="space-y-6">
                      <motion.div variants={itemVariants}>
                        <h4 className="font-medium mb-3 text-lg">Certifications</h4>
                        <ul className="space-y-3">
                          {certifications.map((cert, i) => (
                            <li key={i} className="flex items-start">
                              <div className="p-1.5 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark mr-3 mt-0.5">
                                <ChevronRight size={14} />
                              </div>
                              <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                      
                      <motion.div variants={itemVariants}>
                        <h4 className="font-medium mb-3 text-lg">Awards</h4>
                        <div className="space-y-4">
                          {awards.map((award, i) => (
                            <div key={i} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                              <div className="flex justify-between items-start mb-1">
                                <h5 className="font-bold">{award.title}</h5>
                                <span className="text-sm text-primary-light dark:text-primary-dark">{award.date}</span>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 text-sm">{award.organization}</p>
                              <p className="text-gray-600 dark:text-gray-300 mt-2">{award.description}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
  
              {/* Leadership */}
              <motion.section variants={itemVariants}>
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark">
                    <Shield size={24} />
                  </div>
                  <h3 className="text-2xl font-bold ml-4">Leadership</h3>
                </div>
                
                <motion.div 
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {leadership.map((role, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border-l-4 border-primary-light dark:border-primary-dark shadow-sm"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">{role.role}</h4>
                        <span className="text-sm text-primary-light dark:text-primary-dark bg-blue-50 dark:bg-blue-900 px-2 py-1 rounded">
                          {role.period}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">{role.organization}</p>
                      <p className="text-gray-600 dark:text-gray-300">{role.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Resume;