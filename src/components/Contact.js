import React, { useState } from 'react';

// Toast Component
const Toast = ({ show, message, type, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div className={`
        flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md border
        ${type === 'success' 
          ? 'bg-green-500/20 border-green-500/30 text-green-100' 
          : 'bg-red-500/20 border-red-500/30 text-red-100'
        }
        transform transition-all duration-300 ease-out
      `}>
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 5000);
  };

  const closeToast = () => {
    setToast({ show: false, message: '', type: 'success' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Show success toast
      showToast(`Thank you ${formData.name}! Your message has been sent successfully. I'll get back to you soon!`, 'success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
    } catch (error) {
      // Show error toast
      showToast('Oops! Something went wrong. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden selection:bg-primary selection:text-white py-16">
      {/* Toast Notification */}
      <Toast 
        show={toast.show} 
        message={toast.message} 
        type={toast.type} 
        onClose={closeToast} 
      />

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Get In <span className="bg-gradient-to-r from-primary to-secondary text-gradient">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Let's discuss your next project or just say hello
        </p>
      </div>

      {/* Background Effects */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2 z-0"></div>
      
      <div className="relative flex w-full flex-col">
        <div className="flex flex-col flex-1 px-6 max-w-lg mx-auto w-full z-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-white drop-shadow-sm mb-4">
              Let's Build Something Great
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-body">
              Have a project in mind or want to discuss the latest tech? Fill out the form below and I'll get back to you within 24 hours.
            </p>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-10 relative">
            <div className="space-y-2 group">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-primary transition-colors" htmlFor="name">
                Name
              </label>
              <div className="relative">
                <input
                  className="w-full bg-surface-dark/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2 group">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-primary transition-colors" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <input
                  className="w-full bg-surface-dark/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2 group">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 group-focus-within:text-primary transition-colors" htmlFor="message">
                Message
              </label>
              <div className="relative">
                <textarea
                  className="w-full bg-surface-dark/40 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group border border-white/10 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">send</span>
                </>
              )}
            </button>
          </form>
          
          {/* Social Links */}
          <div className="flex flex-col items-center gap-6 mt-auto">
            <div className="flex items-center gap-4 w-full">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-widest whitespace-nowrap">Find me on</span>
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent flex-1"></div>
            </div>
            
            <div className="flex gap-6 pb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  className="group relative w-12 h-12 rounded-full bg-surface-dark border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                  href={social.href}
                  aria-label={social.name}
                >
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;