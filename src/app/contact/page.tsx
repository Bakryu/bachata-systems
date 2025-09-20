"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Select, Textarea, Button, ScrollReveal } from "@/components/ui";
import { questionsAnswers, projectTypes, budgetRanges } from "@/data/contact";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
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
                Let's Build Something{" "}
                <span className="text-gradient">Amazing Together</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                Ready to transform your digital presence? Get in touch with us
                today and let's discuss how we can help bring your vision to
                life.
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

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800"
                  >
                    Thank you! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-800"
                  >
                    Something went wrong. Please try again or contact us
                    directly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      fullWidth
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      fullWidth
                    />
                  </div>

                  <Input
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    fullWidth
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Project Type"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleInputChange}
                      placeholder="Select a project type"
                      options={projectTypes.map((type) => ({
                        value: type,
                        label: type,
                      }))}
                      fullWidth
                    />

                    <Select
                      label="Budget Range"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="Select budget range"
                      options={budgetRanges.map((range) => ({
                        value: range,
                        label: range,
                      }))}
                      fullWidth
                    />
                  </div>

                  <Input
                    label="Desired Timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    placeholder="e.g., 3 months, ASAP, Q2 2024"
                    fullWidth
                  />

                  <Textarea
                    label="Project Description"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    fullWidth
                  />

                  <Button
                    type="submit"
                    loading={isSubmitting}
                    fullWidth
                    size="lg"
                  >
                    Send Message
                  </Button>
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
                    We're here to help you succeed. Reach out to us through any
                    of these channels, and we'll get back to you as soon as
                    possible.
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
                      <h3 className="font-semibold text-charcoal-950 mb-1">
                        Email Us
                      </h3>
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
                      <h3 className="font-semibold text-charcoal-950 mb-1">
                        Live Chat
                      </h3>
                      <p className="text-charcoal-600 mb-2">
                        Quick questions? Chat with our team
                      </p>
                      <span className="text-green-600 font-medium">
                        Available 9 AM - 6 PM EST
                      </span>
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
                      <h3 className="font-semibold text-charcoal-950 mb-1">
                        Call Us
                      </h3>
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
                      <h3 className="font-semibold text-charcoal-950 mb-1">
                        LinkedIn
                      </h3>
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
                  <h3 className="font-semibold text-charcoal-950 mb-4">
                    Our Office
                  </h3>
                  <div className="space-y-2 text-charcoal-600">
                    <p>123 Innovation Drive</p>
                    <p>Tech District, San Francisco</p>
                    <p>CA 94105, United States</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-charcoal-950 mb-2">
                    ⚡ Quick Response
                  </h3>
                  <p className="text-charcoal-600">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, please call us directly.
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
                Got questions? We've got answers. Here are some common questions
                we receive.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {questionsAnswers.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div className="card p-6" whileHover={{ y: -2 }}>
                  <h3 className="font-semibold text-charcoal-950 mb-3 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-charcoal-600">{faq.answer}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
