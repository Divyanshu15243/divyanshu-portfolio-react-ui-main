import React from 'react';
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';

const AboutSection = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Birthday', value: '24/12/2001', link: null },
    { icon: MapPin, label: 'Location', value: 'Dadra and Nagar Haveli', link: 'https://maps.google.com/?q=Dadra+and+Nagar+Haveli' },
    { icon: Mail, label: 'Email', value: 'divyanshupatel15243@gmail.com', link: 'mailto:divyanshupatel15243@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8849511366', link: 'tel:+918849511366' },
  ];

  return (
    <section id="about" className="py-20 text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <p className="text-muted-foreground leading-relaxed text-xl">
              Hi, I'm <span className="text-primary font-semibold">Divyanshu Patel</span> from Dadra and Nagar Haveli. I specialize in the intersection of technology and data, combining full-stack development for seamless applications, AI prompt engineering for intelligent systems, and data analysis to inform strategic decisions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalInfo.map((info, index) => (
                <div key={index} className={`modern-card group animate-scale-in ${info.link ? 'cursor-pointer hover:bg-muted/50' : ''}`} style={{ animationDelay: `${index * 0.1}s` }} onClick={() => info.link && window.open(info.link, '_self')}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-background" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-muted-foreground text-sm font-medium">{info.label}</span>
                      <p className="text-foreground font-semibold text-sm break-all">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-[350px] h-[400px] sm:w-[380px] sm:h-[430px] lg:w-[400px] lg:h-[450px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets/aboutsection.png"
                alt="Divyanshu Patel"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;