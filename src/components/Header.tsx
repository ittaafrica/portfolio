import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkToggle';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'About', 'Skills', 'Projects', 'Experience', 'Resume', 'Blog', 'Contact'
  ];

  return (
    <header className="fixed w-full bg-white bg-opacity-90 dark:bg-background-dark dark:bg-opacity-90 z-50 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-secondary-light dark:text-secondary-dark cursor-pointer">
          Abdullahi Yusuf<span className="text-primary-light dark:text-primary-dark"> Rufai</span>
        </span>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <span className="hover:text-primary-light dark:hover:text-primary-dark transition cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          
          <DarkModeToggle />
          
          <button 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-background-dark shadow-md`}>
        <nav className="container mx-auto px-6 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <span 
                  className="block py-2 hover:text-primary-light dark:hover:text-primary-dark cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;