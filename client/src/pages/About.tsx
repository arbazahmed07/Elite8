
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/layout/Footer';
import PageTransition from '../components/layout/PageTransition';

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Led the development of user interfaces for multiple web applications, optimizing for performance and accessibility. Mentored junior developers and established code standards for the team."
  },
  {
    id: 2,
    position: "Full Stack Developer",
    company: "Digital Solutions Agency",
    period: "2018 - 2021",
    description: "Worked on various client projects, implementing frontend and backend solutions using the MERN stack. Collaborated with designers and product managers to deliver high-quality applications."
  },
  {
    id: 3,
    position: "Web Developer",
    company: "Creative Studio",
    period: "2016 - 2018",
    description: "Developed responsive websites and e-commerce platforms for clients across different industries. Focused on creating engaging user experiences with modern technologies."
  }
];

const education: Education[] = [
  {
    id: 1,
    degree: "MSc in Computer Science",
    institution: "University of Technology",
    period: "2014 - 2016"
  },
  {
    id: 2,
    degree: "BSc in Software Engineering",
    institution: "State University",
    period: "2010 - 2014"
  }
];

const skills = [
  { name: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs", "GraphQL"] },
  { name: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"] }
];

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4">
            {/* Hero section */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h1 className="text-balance mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    About Me
                  </span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get to know more about my journey, skills, and experience as a developer and designer.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border-4 border-primary/20">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                      alt="Portrait" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                </div>
                
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl font-bold mb-4"
                  >
                    My Story
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-4 text-muted-foreground"
                  >
                    <p>
                      I'm a passionate full-stack developer with a strong background in creating beautiful, 
                      functional web applications that deliver exceptional user experiences.
                    </p>
                    <p>
                      My journey in web development began over 7 years ago when I discovered my passion for 
                      building things that live on the internet. Since then, I've worked with various technologies 
                      and frameworks, continuously expanding my knowledge and skills.
                    </p>
                    <p>
                      What sets me apart is my holistic approach to development. I don't just write code; 
                      I create solutions that address real business needs while providing intuitive interfaces 
                      for users. My background in both design and development allows me to bridge the gap between 
                      aesthetics and functionality.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-secondary rounded-xl p-6"
                  >
                    <h3 className="text-lg font-semibold mb-4 text-primary">{category.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Experience section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="bg-secondary rounded-xl p-6"
                  >
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{exp.position}</h3>
                      <span className="text-primary text-sm">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Education section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                    className="bg-secondary rounded-xl p-6"
                  >
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <span className="text-primary text-sm">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
