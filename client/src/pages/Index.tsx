
import React, { useEffect } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import AboutSection from '../components/home/About';
import ContactSection from '../pages/Contact';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Add scroll animations
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedProjects />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
