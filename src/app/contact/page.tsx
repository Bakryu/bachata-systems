'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCTA from '@/components/ui/AnimatedCTA';

const budgetRanges = [
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
];

const projectTypes = [
  'Web Development',
  'UI/UX Design',
  'E-commerce',
  'Mobile App',
  'Branding',
  'Consulting',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-950 mb-6">
                Let's Build Something{' '}
                <span className="text-gradient">Amazing Together</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                Ready to transform your digital presence? Get in touch with us today 
                and let's discuss how we can help bring your vision to life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="card p-8">
                <h2 className="text-3xl font-bold text-charcoal-950 mb-6">
                  Start Your Project
                </h2>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800"
                  >
                    Thank you! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-800"
                  >
                    Something went wrong. Please try again or contact us directly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-charcoal-700 mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Desired Timeline
                    </label>
                    <input
                      type="text"
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="e.g., 3 months, ASAP, Q2 2024"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-charcoal-950 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-charcoal-600 mb-8">
                    We're here to help you succeed. Reach out to us through any of these channels, 
                    and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <motion.div
                    className="flex items-start space-x-4 p-6 card"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-950 mb-1">Email Us</h3>
                      <p className="text-charcoal-600 mb-2">
                        For project inquiries and general questions
                      </p>
                      <a
                        href="mailto:hello@haloagency.com"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        hello@haloagency.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4 p-6 card"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-950 mb-1">Live Chat</h3>
                      <p className="text-charcoal-600 mb-2">
                        Quick questions? Chat with our team
                      </p>
                      <span className="text-green-600 font-medium">Available 9 AM - 6 PM EST</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4 p-6 card"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 text-xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-950 mb-1">Call Us</h3>
                      <p className="text-charcoal-600 mb-2">
                        Prefer to talk? Give us a call
                      </p>
                      <a
                        href="tel:+1-555-123-4567"
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-4 p-6 card"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">💼</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-950 mb-1">LinkedIn</h3>
                      <p className="text-charcoal-600 mb-2">
                        Connect with us professionally
                      </p>
                      <a
                        href="https://linkedin.com/company/haloagency"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        @haloagency
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Office Information */}
                <div className="card p-6">
                  <h3 className="font-semibold text-charcoal-950 mb-4">Our Office</h3>
                  <div className="space-y-2 text-charcoal-600">
                    <p>123 Innovation Drive</p>
                    <p>Tech District, San Francisco</p>
                    <p>CA 94105, United States</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal-950 mb-2">⚡ Quick Response</h3>
                  <p className="text-charcoal-600">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Got questions? We've got answers. Here are some common questions we receive.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "What's included in your web development service?",
                answer: "Our web development service includes strategy consultation, UI/UX design, frontend and backend development, testing, deployment, and post-launch support. We also provide training and documentation."
              },
              {
                question: "Do you work with startups?",
                answer: "Absolutely! We love working with startups and understand the unique challenges they face. We offer flexible pricing and can help you build an MVP to validate your idea before scaling."
              },
              {
                question: "What technologies do you use?",
                answer: "We use modern, proven technologies including React, Next.js, Node.js, TypeScript, and various cloud platforms. We choose the best tech stack based on your specific needs and goals."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various support packages including maintenance, updates, monitoring, and feature enhancements. We're here to help your digital product succeed long-term."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  className="card p-6"
                  whileHover={{ y: -2 }}
                >
                  <h3 className="font-semibold text-charcoal-950 mb-3 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-charcoal-600">
                    {faq.answer}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
