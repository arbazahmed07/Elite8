
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { ScrollIndicator } from '../ui/scroll-indicator';

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
    }));
  }, [controls]);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-accent/10 blur-3xl"></div>
        
        {/* Grid overlay with parallax effect */}
        <motion.div
          className="absolute inset-0 bg-grid-white/[0.02]"
          style={{
            backgroundImage: "linear-gradient(to right, hsla(var(--primary)/0.05) 1px, transparent 1px), linear-gradient(to bottom, hsla(var(--primary)/0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
          animate={{
            backgroundPosition: ["0px 0px", "20px 20px"]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              custom={0}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="text-balance font-extrabold leading-tight mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Creative Developer
              </span>
              <br />
              Crafting Digital Experiences
            </motion.h1>
            
            <motion.p
              custom={1}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8"
            >
              Blending design and technology to build innovative digital solutions 
              that deliver exceptional user experiences.
            </motion.p>
            
            <motion.div
              custom={2}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              className="flex flex-wrap gap-4"
            >
              <Link to="/work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div 
                animate={{ y: [0, -20, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm p-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Developer workspace"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 -left-8 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            
            {/* Floating shapes with parallax effect */}
            <motion.div
              className="absolute top-1/4 right-0 w-12 h-12 border-2 border-primary/50 rounded-lg"
              animate={{
                rotate: [0, 360],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute bottom-1/4 left-0 w-8 h-8 border-2 border-accent/50 rounded-full"
              animate={{
                rotate: [0, -360],
                x: [0, -10, 0],
                y: [0, 15, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <ScrollIndicator size={60} />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
