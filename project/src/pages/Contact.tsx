import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      details: 'Erode, Tamil Nadu, India'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'bhoomash0000@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+91 9159342688'
    }
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Let's start a conversation"
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <AnimatedSection>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{item.title}</h4>
                      {item.title === 'Email' ? (
                        <a href={`mailto:${item.details.trim()}`} className="text-blue-600 dark:text-blue-400 underline">{item.details}</a>
                      ) : item.title === 'Phone' ? (
                        <a href={`tel:${item.details.replace(/\s+/g, '')}`} className="text-blue-600 dark:text-blue-400 underline">{item.details}</a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg mb-4">Connect With Me</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Let's connect on social media platforms or professional networks.
                </p>
                
                <div className="rounded-xl overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711243.17762776!2d64.4398422293091!3d20.011408266548177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1644684739958!5m2!1sen!2sin"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location map showing India"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;