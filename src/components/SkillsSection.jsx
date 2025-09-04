import React from 'react';
import { Code, Database, Wrench, Layers } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    },
    {
      title: 'Languages & Frameworks',
      icon: Layers,
      skills: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'Tkinter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
        { name: 'Netlify', icon: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
        { name: 'Power BI', icon: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg' },
        { name: 'Excel', icon: 'https://img.icons8.com/color/48/microsoft-excel-2019.png' },
        { name: 'Microsoft Office', icon: 'https://img.icons8.com/color/48/microsoft-office-2019.png' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-10 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various programming languages, frameworks, and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="modern-card group hover-glow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="text-background" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="px-3 py-2 bg-muted text-primary text-sm rounded-full border border-border/50 hover:border-primary/50 transition-colors duration-300 text-center flex items-center justify-center gap-2">
                    {skill.icon.startsWith('http') ? (
                      <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                    ) : (
                      <span className="text-lg">{skill.icon}</span>
                    )}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;