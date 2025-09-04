import React from 'react';
import { GraduationCap, Briefcase, Download } from 'lucide-react';

const ResumeSection = () => {
  const education = [
    {
      year: '2023-2025',
      degree: 'MCA',
      institution: 'Ajeenkya DY Patil University',
      description: 'Master of Computer Applications with focus on advanced software development and emerging technologies.'
    },
    {
      year: '2020-2023',
      degree: 'B.Sc. in Computer Science',
      institution: 'Savitribai Phule Pune University',
      description: 'Bachelor of Science in Computer Science with comprehensive foundation in programming and software engineering.'
    }
  ];

  const experience = [
    {
      year: 'June 2024 – September 2024',
      position: 'React Developer Intern',
      company: 'DBS Media Tech',
      description: 'Contributed to React-based front-end projects, built responsive interactive UIs, and focused on quality delivery and efficient problem-solving.'
    }
  ];

  return (
    <section id="resume" className="py-20 text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3.5s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            A comprehensive overview of my educational background and professional experience in technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-slide-up">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="text-background" size={24} />
              </div>
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="modern-card group hover-glow animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-primary text-sm font-semibold mb-3">{edu.year}</div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{edu.degree}</h4>
                  <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="text-background" size={24} />
              </div>
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="modern-card group hover-glow animate-scale-in" style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
                  <div className="text-accent text-sm font-semibold mb-3">{exp.year}</div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">{exp.position}</h4>
                  <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-scale-in" style={{ animationDelay: '0.8s' }}>
          <a 
            href="/assets/Divyanshu patel resume FD.pdf"
            download="Divyanshu patel resume FD.pdf"
            className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group hover:scale-105"
          >
            <Download className="mr-3 group-hover:animate-bounce" size={24} />
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;