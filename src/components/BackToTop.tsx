import React from "react";
const BackToTop = () => {
    return (
      <a 
        href="#" 
        className="fixed bottom-8 right-8 bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors duration-300 z-30"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    );
  };
  
  export default BackToTop;