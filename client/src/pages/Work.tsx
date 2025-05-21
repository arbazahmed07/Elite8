
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';
import { ScrollProgress } from '../components/ui/scroll-progress';
import { SkeletonCard } from '../components/ui/skeleton-loader';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    description: "A modern e-commerce platform built with React and Node.js featuring a product catalog, shopping cart, and secure checkout process.",
    year: "2023"
  },
  {
    id: "project-2",
    title: "Mobile Banking App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "User-friendly mobile banking application with secure authentication, transaction history, and bill payment features.",
    year: "2023"
  },
  {
    id: "project-3",
    title: "Travel Blog",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    description: "Responsive travel blog with dynamic content management, geolocation features, and interactive maps.",
    year: "2022"
  },
  {
    id: "project-4",
    title: "Fitness Tracker",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "A comprehensive fitness tracking application that monitors workouts, nutrition, and progress towards fitness goals.",
    year: "2022"
  },
  {
    id: "project-5",
    title: "Real Estate Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
    description: "A real estate platform with property listings, advanced search filters, and interactive maps for finding the perfect home.",
    year: "2021"
  },
  {
    id: "project-6",
    title: "Social Media Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "A comprehensive dashboard for managing multiple social media accounts, including analytics and scheduling features.",
    year: "2021"
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile App", "Web Design"];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulate loading delay for demo purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Simulate loading when changing category
    setLoading(true);
    
    const timer = setTimeout(() => {
      // Filter projects based on selected category
      if (selectedCategory === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => project.category === selectedCategory));
      }
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // Tilt effect functions
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollProgress />
        
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-balance mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  My Work
                </span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my recent projects and see how I bring ideas to life through design and code.
              </p>
            </motion.div>
            
            {/* Category filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
            
            {/* Projects grid with loading state */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {loading ? (
                // Skeleton loaders
                Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={`skeleton-${index}`} className="bg-secondary/50" />
                ))
              ) : (
                // Actual projects
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="group"
                  >
                    <div 
                      className="tilt-card relative overflow-hidden rounded-lg shadow-lg"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                        <div className="p-6 w-full tilt-card-content">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-primary text-sm uppercase tracking-wider">{project.category}</span>
                            <span className="text-muted-foreground text-sm">{project.year}</span>
                          </div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                          <div className="mt-4">
                            <motion.button 
                              className="text-primary hover:text-accent transition-colors text-sm font-medium"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              View Project →
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
            
            {!loading && filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Work;
