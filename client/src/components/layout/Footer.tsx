import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Try to access router location to check if we're in a router context
  let isRouterAvailable = true;
  try {
    useLocation();
  } catch (e) {
    isRouterAvailable = false;
  }
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
  ];

  // Create a component that renders either a Link or an anchor based on router availability
  const SafeLink = ({ to, className, children, onClick = () => {} }) => {
    if (isRouterAvailable && to) {
      return <Link to={to} className={className} onClick={onClick}>{children}</Link>;
    }
    // Use anchor tag instead of span for better accessibility
    return <a href={to} className={className} onClick={onClick}>{children}</a>;
  };

  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-primary text-xl mb-4"
            >
              Portfolio
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              Creating digital experiences that inspire and delight users through thoughtful design and development.
            </motion.p>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-primary text-xl mb-4"
            >
              Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {['Home', 'Work', 'About', 'Contact'].map((item, index) => (
                <li key={index}>
                  <SafeLink 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="animated-link text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </SafeLink>
                </li>
              ))}
            </motion.ul>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-primary text-xl mb-4"
            >
              Connect
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 text-center text-muted-foreground"
        >
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
