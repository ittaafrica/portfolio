import { motion } from 'framer-motion';
import { useState, useRef, FormEvent, ReactElement } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<ReactElement<HTMLElement>|null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result:any) => {
      console.log(result.text);
      setSubmitStatus('success');
      form.current.reset();
    }, (error:any) => {
      console.log(error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-400 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mr-3">
                  <Mail className="text-primary-light dark:text-primary-dark" size={20} />
                </span>
                Contact Information
              </h3>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <a 
                      href="mailto:yusufrufaiabdullahi@gmail.com" 
                      className="text-gray-800 dark:text-gray-200 hover:text-primary-light dark:hover:text-primary-dark transition"
                    >
                      yusufrufaiabdullahi@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                    <a 
                      href="tel:+2348100000000" 
                      className="text-gray-800 dark:text-gray-200 hover:text-primary-light dark:hover:text-primary-dark transition"
                    >
                      +234 810 000 0000
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-primary-light dark:text-primary-dark mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 dark:text-gray-400">Location</h4>
                    <p className="text-gray-800 dark:text-gray-200">
                      Bauchi, Nigeria
                    </p>
                  </div>
                </motion.div>

                {/* Social Media Links */}
                <div className="pt-4">
                  <h4 className="font-medium text-gray-500 dark:text-gray-400 mb-3">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: Github, url: "https://github.com/abdullahiyusufrufai" },
                      { icon: Linkedin, url: "https://linkedin.com/in/adullahiysufrufai" },
                      { icon: Twitter, url: "https://twitter.com" },
                      { icon: Facebook, url: "https://facebook.com/abdullahi.yusufufai" }
                    ].map((social, i) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={i}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition"
                        >
                          <Icon size={18} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mr-3">
                  <Send className="text-primary-light dark:text-primary-dark" size={20} />
                </span>
                Send Me a Message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg"
                >
                  Oops! Something went wrong. Please try again later.
                </motion.div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                    placeholder="Project Inquiry"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full bg-gradient-to-r from-primary-light to-blue-600 dark:from-primary-dark dark:to-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center shadow-md hover:shadow-lg transition ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;