import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const roles = ['Full Stack Developer', 'AI Engineer', 'Data Analyst'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-between bg-black text-white px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-orange-400 text-sm font-medium tracking-wider uppercase">HELLO!</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              I'm <span className="text-orange-400">Divyanshu</span><br />
              <span className="text-orange-400">Patel</span>
            </h1>
            <div className="h-8 flex items-center">
              <p className="text-xl text-gray-300">
                {displayText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-gray-400 max-w-lg leading-relaxed">
              "I specialize in the intersection of technology and data, building seamless applications, smart AI systems, and insightful data solutions."
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/divyanshu-patel-a64835354/', '_blank')}
                className="bg-orange-400 text-black px-8 py-3 rounded-full font-medium hover:bg-orange-300 transition-colors duration-300"
              >
                LINKEDIN
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:border-orange-400 hover:text-orange-400 transition-colors duration-300"
              >
                MY WORKS
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/assets/herosection.png"
                alt="Divyanshu Patel"
                className="w-96 h-96 sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-orange-400"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;