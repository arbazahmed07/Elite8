
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ui/theme-toggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren",
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Portfolio
          </motion.div>
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <ThemeToggle />
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center px-3 py-2 border rounded border-primary text-primary hover:text-accent hover:border-accent"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['home', 'work', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'home' ? '/' : `/${item}`}>
                    <motion.div
                      className={`animated-link text-foreground uppercase text-sm tracking-widest ${
                        location.pathname === (item === 'home' ? '/' : `/${item}`) 
                          ? 'text-primary' 
                          : ''
                      }`}
                      whileHover={{ y: -2 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu with animated transitions */}
      <motion.div
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg overflow-hidden"
      >
        <motion.ul className="flex flex-col py-4 px-4">
          {['home', 'work', 'about', 'contact'].map((item) => (
            <motion.li key={item} variants={itemVariants}>
              <Link 
                to={item === 'home' ? '/' : `/${item}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 px-4 text-foreground uppercase text-sm tracking-widest border-l-2 ${
                  location.pathname === (item === 'home' ? '/' : `/${item}`) 
                    ? 'border-primary text-primary' 
                    : 'border-transparent'
                }`}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
