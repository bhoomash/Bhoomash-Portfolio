import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {isSubmitted ? (
        <motion.div
          className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 md:p-6 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-lg md:text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-sm md:text-base">Thank you for contacting me. I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <label htmlFor="name" className="block mb-1.5 md:mb-2 font-medium text-sm md:text-base">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm md:text-base ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your name"
              required
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs md:text-sm text-red-500" role="alert">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1.5 md:mb-2 font-medium text-sm md:text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm md:text-base ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs md:text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-1.5 md:mb-2 font-medium text-sm md:text-base">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm md:text-base ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="What is this regarding?"
            />
            {errors.subject && (
              <p className="mt-1 text-xs md:text-sm text-red-500">{errors.subject}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1.5 md:mb-2 font-medium text-sm md:text-base">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formState.message}
              onChange={handleChange}
              className={`w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none text-sm md:text-base ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Your message here..."
            />
            {errors.message && (
              <p className="mt-1 text-xs md:text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 md:py-3 px-4 md:px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-70 text-sm md:text-base"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={16} className="md:w-[18px] md:h-[18px]" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </motion.form>
      )}
    </div>
  );
};

export default ContactForm;