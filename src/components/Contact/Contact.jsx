import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "bikaamohammad@gmail.com",
      link: "mailto:bikaamohammad@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 751855578",
      link: "tel:+94751855578"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Katupotha Road, Kilimpola Phamuna, Sri Lanka",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/MOHAMMEDAAKIB",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/mohammad-aakib",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/MOHAMMEDAAKIB",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" style={{ padding: "100px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" style={{ padding: "100px" }}  >
          <center> 
          <h2 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div data-aos="fade-up" data-aos-delay="200" className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p data-aos="fade-up" data-aos-delay="300" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's discuss your project or just say hello. I'm always open to new opportunities and collaborations.
          </p>
          </center>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right" >
            <h3 className="text-2xl font-bold text-white mb-8" style={{ paddingBottom: "30px" }}>Let's Connect</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed" style={{ paddingBottom: "30px" }}>
              I'm currently looking for new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8 gap-3" style={{ paddingBottom: "30px" }}>
              {contactInfo.map((info, index) => (
                <>
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300 group" style={{ padding: "10px" }}>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 gap-3">
                      {info.icon}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-gray-400 text-sm gap-3">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>
                  <br />
                </>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4" style={{ paddingBottom: "10px" }}>Follow Me</h4>
              <div className="flex space-x-4 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-blue-500/50`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2" style={{ paddingTop: "20px" ,paddingBottom: "10px" }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="Your Name"
                  style={{ paddingTop: "20px" }}/>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2" style={{ paddingTop: "20px" ,paddingBottom: "10px"}}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  placeholder="your.email@example.com"
                  style={{ paddingTop: "20px" }}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2" style={{ paddingTop: "20px" ,paddingBottom: "10px"}}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                  style={{ paddingTop: "20px" }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                style={{ padding: "20px" }}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" style={{ paddingTop: "20px" }}/>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;