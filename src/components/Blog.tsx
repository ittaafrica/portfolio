import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../constants';

const Blog = () => {
  const categoryColors = {
    'Artificial Intelligence': 'bg-purple-500 dark:bg-purple-600',
    'Embedded Systems': 'bg-blue-500 dark:bg-blue-600',
    'Technology': 'bg-green-500 dark:bg-green-600',
    'IoT': 'bg-orange-500 dark:bg-orange-600',
    'Data Science': 'bg-red-500 dark:bg-red-600',
    'Machine Learning': 'bg-indigo-500 dark:bg-indigo-600'
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Blog
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Below are some of my blog posts. You can always click on them to get updates on tech trends or tech news.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className={`absolute top-0 right-0 ${categoryColors[post.category]} text-white text-xs px-3 py-1 m-2 rounded`}>
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mr-4">
                      <post.icon className="text-primary-light dark:text-primary-dark" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light dark:hover:text-primary-dark">
                        {post.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {post.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {post.date}
                    </span>
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-light dark:text-primary-dark hover:underline text-sm font-medium cursor-pointer"
                    >
                      Read More
                      <ArrowRight className="ml-1 inline" size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://medium.com/@yusufrufaiabdullahi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            View All Articles
            <ArrowRight className="ml-2" size={16} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Blog;