import React,{ useState, useEffect } from 'react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'resume', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Real-time Object Detection System",
      description: "Developed a YOLOv5-based system for real-time object detection with 92% accuracy in complex environments.",
      tech: ["Python", "PyTorch", "OpenCV", "TensorRT"],
      github: "#",
      live: "#"
    },
    {
      title: "Financial Market Predictor",
      description: "LSTM neural network predicting stock movements with 78% accuracy using sentiment analysis and technical indicators.",
      tech: ["Python", "TensorFlow", "NLTK", "pandas"],
      github: "#",
      live: "#"
    },
    {
      title: "High-Frequency Trading Engine",
      description: "C++ low-latency trading system achieving 15μs order response times with custom networking stack.",
      tech: ["C++17", "Boost.Asio", "ZeroMQ", "CUDA"],
      github: "#",
      live: "#"
    },
    {
      title: "Healthcare Analytics Dashboard",
      description: "Interactive R Shiny dashboard for hospital readmission analysis with predictive modeling capabilities.",
      tech: ["R", "Shiny", "ggplot2", "caret"],
      github: "#",
      live: "#"
    }
  ];

  const experiences = [
    {
      company: "TechNova AI",
      role: "Senior Machine Learning Engineer",
      period: "2021 - Present",
      points: [
        "Led development of computer vision system reducing manufacturing defects by 34%",
        "Optimized PyTorch models achieving 5x inference speedup with TensorRT",
        "Mentored 3 junior engineers in ML best practices and software engineering"
      ]
    },
    {
      company: "Quantum Analytics",
      role: "Data Scientist",
      period: "2018 - 2021",
      points: [
        "Built predictive models for customer churn with 89% accuracy",
        "Developed automated ETL pipelines processing 2TB+ daily data",
        "Created R package for time series analysis adopted by 200+ data scientists"
      ]
    },
    {
      company: "SysCore Solutions",
      role: "Software Engineer",
      period: "2015 - 2018",
      points: [
        "Designed high-performance C++ middleware for financial applications",
        "Reduced latency by 62% through algorithm optimization",
        "Implemented CI/CD pipeline reducing deployment time by 75%"
      ]
    }
  ];

  const skills = {
    languages: [
      { name: "Python", level: 95 },
      { name: "C++", level: 90 },
      { name: "R", level: 85 },
      { name: "Bash", level: 80 }
    ],
    libraries: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "pandas", level: 95 },
      { name: "scikit-learn", level: 90 }
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 90 },
      { name: "Linux", level: 85 },
      { name: "AWS", level: 80 }
    ]
  };

  const blogPosts = [
    {
      title: "Optimizing PyTorch Models for Production",
      excerpt: "Techniques to reduce latency and memory usage in deep learning models.",
      date: "May 2023"
    },
    {
      title: "Modern C++ for High-Performance Computing",
      excerpt: "Leveraging C++20 features for numerical computing applications.",
      date: "March 2023"
    },
    {
      title: "Advanced Feature Engineering in R",
      excerpt: "Creating effective features for time series forecasting models.",
      date: "January 2023"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
  

      {/* Navigation */}
      <nav className={`fixed w-full z-10 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold">Linus Vandu</a>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {['home', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item}`}
                    className={`capitalize transition-colors ${activeSection === item ? 'text-blue-500' : 'hover:text-blue-500'}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button className="md:hidden">☰</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Linus Vandu — <span className="text-blue-500">ML Engineer</span> & <span className="text-blue-500">Software Developer</span>
            </h1>
            <p className="text-xl mb-8">
              I solve real-world problems with Python, C++, and Machine Learning
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Download Resume
              </button>
              <button className={`border ${darkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'} px-6 py-3 rounded-lg font-medium transition-colors`}>
                GitHub
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <div className={`w-48 h-48 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} mx-auto md:mx-0 mb-6 overflow-hidden`}>
                <img 
                  src="https://via.placeholder.com/300" 
                  alt="Linus Vandu" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Machine Learning Engineer & Software Developer</h3>
              <p className="mb-6">
                With over 7 years of experience in machine learning and software development, I specialize in building high-performance systems that leverage cutting-edge AI technologies. My expertise spans from developing deep learning models to optimizing low-latency C++ applications.
              </p>
              <p className="mb-6">
                I'm passionate about solving complex problems at the intersection of data science and software engineering, with a strong focus on delivering production-ready solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>Deep Learning</span>
                <span className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>Computer Vision</span>
                <span className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>High-Performance Computing</span>
                <span className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>Data Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Languages</h3>
              {skills.languages.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-blue-500" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Libraries & Frameworks</h3>
              {skills.libraries.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-blue-500" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Tools & Platforms</h3>
              {skills.tools.map((skill) => (
                <div key={skill.name} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className="h-full rounded-full bg-blue-500" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className={`h-48 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                  <span className="text-6xl">📊</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className={`text-sm px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        className="px-4 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-4 md:left-1/2 h-full w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transform -translate-x-1/2`}></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`mb-12 relative pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} transform -translate-x-1/2 flex items-center justify-center`}>
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className={`font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{exp.company}</p>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{exp.period}</p>
                  <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex">
                        <span className="mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Resume</h2>
          
          <div className={`p-8 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Linus Vandu</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Machine Learning Engineer & Software Developer</p>
              </div>
              <button className="mt-4 md:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Download Full Resume
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 border-b pb-2">Education</h4>
                <div className="mb-6">
                  <h5 className="font-medium">M.Sc. in Computer Science</h5>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Stanford University | 2013 - 2015</p>
                </div>
                <div>
                  <h5 className="font-medium">B.Sc. in Computer Engineering</h5>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>MIT | 2009 - 2013</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 border-b pb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {[...skills.languages, ...skills.libraries, ...skills.tools].map((skill) => (
                    <span 
                      key={skill.name}
                      className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className={`h-48 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                  <span className="text-6xl">📝</span>
                </div>
                <div className="p-6">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.date}</span>
                  <h3 className="text-xl font-semibold my-2">{post.title}</h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{post.excerpt}</p>
                  <a 
                    href="#" 
                    className={`font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Feel free to reach out for collaboration opportunities or just to say hello!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className={`mr-4 p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>📧</span>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:linus@example.com" 
                      className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}
                    >
                      linus@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className={`mr-4 p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>🔗</span>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/linusvandu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}
                    >
                      linkedin.com/in/linusvandu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className={`mr-4 p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>💻</span>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a 
                      href="https://github.com/linusvandu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} transition-colors`}
                    >
                      github.com/linusvandu
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`mb-4 md:mb-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} Linus Vandu. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/linusvandu" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                <span className="sr-only">GitHub</span>
                <span className="text-xl">🐙</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/linusvandu" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                <span className="sr-only">LinkedIn</span>
                <span className="text-xl">🔗</span>
              </a>
              
              <a 
                href="mailto:linus@example.com" 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                <span className="sr-only">Email</span>
                <span className="text-xl">✉️</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;