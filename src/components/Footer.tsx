const Footer = () => {
    return (
      <footer className="bg-gray-900 py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="copyright text-gray-400 mb-2">
            © Copyright <strong className="text-white">Rufai</strong>
          </div>
          <div className="credits text-gray-500 text-sm">
            Designed by <a 
              href="https://github.com/abdullahiyusufrufai" 
              className="text-indigo-400 hover:text-indigo-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rufai
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;