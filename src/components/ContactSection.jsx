import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'ADDRESS',
      value: 'Dadra and Nagar Haveli',
      link: 'https://maps.google.com/?q=Dadra+and+Nagar+Haveli'
    },
    {
      icon: Phone,
      title: 'CONTACT NUMBER',
      value: '+91 8849511366',
      link: 'tel:+918849511366'
    },
    {
      icon: Mail,
      title: 'EMAIL ADDRESS',
      value: 'divyanshupatel15243@gmail.com',
      link: 'mailto:divyanshupatel15243@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LINKEDIN',
      value: 'Divyanshu Patel',
      link: 'https://www.linkedin.com/in/divyanshu-patel-a64835354/'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = 'service_0a4v3xd';
      const templateId = 'template_4ggvp6a';
      const publicKey = 'sBh-kDvOnoLG1cPZk';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Divyanshu Patel',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-16 left-16 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-16 right-16 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="modern-card text-center group animate-scale-in cursor-pointer hover:bg-muted/50" style={{ animationDelay: `${index * 0.1}s` }} onClick={() => window.open(info.link, '_blank')}>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="text-background" size={24} />
              </div>
              <h3 className="text-sm font-semibold mb-2 text-foreground">{info.title}</h3>
              <p className="text-muted-foreground text-sm">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-96 h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/assets/contactsection.png"
                alt="Divyanshu Patel"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="modern-card h-[500px] flex flex-col animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex-1">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;