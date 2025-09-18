'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCTA from '@/components/ui/AnimatedCTA';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'With over 10 years of experience in digital strategy and business development, Sarah leads our vision of creating exceptional web experiences.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    skills: ['Strategy', 'Leadership', 'Business Development'],
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@haloagency.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    bio: 'Michael is a full-stack developer passionate about creating scalable, performant applications using the latest technologies.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
    social: {
      linkedin: '#',
      github: '#',
      email: 'michael@haloagency.com'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Emily brings creativity and user-centered thinking to every project, ensuring beautiful and functional design solutions.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    skills: ['UI/UX Design', 'Figma', 'Design Systems'],
    social: {
      linkedin: '#',
      dribbble: '#',
      email: 'emily@haloagency.com'
    }
  }
];

const cooperationModels = [
  {
    title: 'Project-Based',
    description: 'Perfect for defined projects with clear scope and timeline.',
    icon: '🎯',
    features: [
      'Fixed scope and timeline',
      'Dedicated project manager',
      'Regular milestone reviews',
      'Post-launch support included'
    ],
    bestFor: 'Startups, SMBs with specific needs',
    duration: '2-12 weeks'
  },
  {
    title: 'Retainer Partnership',
    description: 'Ongoing collaboration for continuous development and support.',
    icon: '🤝',
    features: [
      'Monthly allocated hours',
      'Priority support',
      'Flexible scope adjustments',
      'Long-term strategic planning'
    ],
    bestFor: 'Growing businesses, agencies',
    duration: '3+ months'
  },
  {
    title: 'Dedicated Team',
    description: 'Full-time dedicated developers and designers for your projects.',
    icon: '👥',
    features: [
      'Dedicated team members',
      'Direct communication',
      'Agile development process',
      'Scalable team size'
    ],
    bestFor: 'Enterprises, complex projects',
    duration: '6+ months'
  }
];

const values = [
  {
    title: 'Quality First',
    description: 'We never compromise on quality. Every line of code and pixel is crafted with care.',
    icon: '⭐'
  },
  {
    title: 'Transparent Communication',
    description: 'Clear, honest communication throughout every project. No surprises, just results.',
    icon: '💬'
  },
  {
    title: 'Continuous Learning',
    description: 'We stay ahead of the curve by constantly learning and adopting new technologies.',
    icon: '📚'
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our achievements by your results.',
    icon: '🚀'
  }
];

const faqs = [
  {
    question: 'How do you ensure project quality?',
    answer: 'We follow strict quality assurance processes including code reviews, testing, and regular client feedback sessions. Every project goes through multiple quality checkpoints before delivery.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. We provide detailed timelines during the planning phase.'
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients globally. We have experience working across different time zones and have established processes for remote collaboration.'
  },
  {
    question: 'Can you work with our existing team?',
    answer: 'Absolutely! We can integrate with your existing team or work independently. We adapt our workflow to match your preferred collaboration style.'
  },
  {
    question: 'What happens if we need changes after launch?',
    answer: 'All our projects include post-launch support. For ongoing changes, we offer maintenance packages or can work on a project basis for larger updates.'
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We use modern collaboration tools like Slack, Notion, and regular video calls. You\'ll have direct access to your project team and regular progress updates.'
  }
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-950 mb-6">
                Meet Our{' '}
                <span className="text-gradient">Team</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                We're a passionate team of designers, developers, and strategists 
                dedicated to creating exceptional digital experiences.
              </p>
              <AnimatedCTA href="/contact" size="lg">
                Work With Us
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Get to know the talented individuals who bring your projects to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <motion.div
                  className="card p-6 text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-charcoal-950 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-charcoal-600 mb-6">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-charcoal-100 rounded-full flex items-center justify-center text-charcoal-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      >
                        <span className="text-sm font-bold">
                          {platform === 'linkedin' ? 'in' : 
                           platform === 'twitter' ? '𝕏' :
                           platform === 'github' ? 'gh' :
                           platform === 'dribbble' ? 'dr' : '@'}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Models */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Choose the collaboration model that best fits your project needs and business goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cooperationModels.map((model, index) => (
              <ScrollReveal key={model.title} delay={index * 0.1}>
                <motion.div
                  className="card p-8 h-full group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {model.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-charcoal-950 mb-3">
                    {model.title}
                  </h3>
                  
                  <p className="text-charcoal-600 mb-6">
                    {model.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                        <span className="text-charcoal-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="border-t border-charcoal-200 pt-4">
                      <p className="text-sm text-charcoal-500 mb-1">Best for:</p>
                      <p className="font-medium text-charcoal-700 mb-2">{model.bestFor}</p>
                      <p className="text-sm text-charcoal-500 mb-1">Duration:</p>
                      <p className="font-medium text-blue-600">{model.duration}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-950 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Common questions about working with our team and our processes.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let's discuss your project and find the perfect collaboration model 
              for your needs. Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedCTA href="/contact" variant="secondary" size="lg">
                Start a Conversation
              </AnimatedCTA>
              <AnimatedCTA href="/pricing" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Pricing
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
