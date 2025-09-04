import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Restaurant Management System',
      description: 'An efficient web application to manage restaurant operations including menu, orders, and billing.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop',
      technologies: ['Java', 'Swing', 'Awt', 'MYsql'],
      githubLink: 'https://github.com/Divyanshu15243/restaurant-management-system',
      liveLink: '#'
    },
    {
      title: 'Gym Managemnet System',
      description: 'A comprehensive dashboard for data visualization and AI-powered insights for business intelligence.',
      image: 'https://joinin2.com/wp-content/uploads/2023/10/The-ultimate-guide-to-choosing-your-gym-management-software.webp',
      technologies: ['Python', 'Tkinter', 'SQLite db', 'Django'],
      githubLink: 'https://github.com/Divyanshu15243/Gyms-Master',
      liveLink: '#'
    },
    {
      title: 'Alice-personal-assistant',
      description: 'Alice is an AI-powered personal assistant designed to help users organize their day, manage tasks, and improve productivity. With natural language processing and smart automation, Alice is equipped to handle a wide variety of tasks with ease..',
      image: 'https://thumbs.dreamstime.com/b/ai-virtual-assistant-interacts-clients-modern-office-setting-tech-support-robot-sits-table-human-colleagues-instant-356198965.jpg?w=768',
      technologies: ['Pthon', 'Python Libaries'],
      githubLink: 'https://github.com/Divyanshu15243/Alice-personal-assistant-',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-32 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            A showcase of my recent work demonstrating expertise in full-stack development, AI engineering, and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="modern-card group hover-glow animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-accent transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveLink}
                      className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground hover:bg-primary transition-colors duration-300 hover:scale-110 transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-primary text-sm rounded-full border border-border/50 hover:border-primary/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <button 
              onClick={() => window.open('https://github.com/Divyanshu15243', '_blank')}
              className="relative bg-background border border-border/20 rounded-2xl px-12 py-4 text-lg font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm"
            >
              <span className="gradient-text">More Projects on GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;