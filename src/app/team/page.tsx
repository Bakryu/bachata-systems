'use client';

import { motion } from 'framer-motion';
import { 
  Typography, 
  Section, 
  Container, 
  Card, 
  Button,
  Link,
  ScrollReveal 
} from '@/components/ui';
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
      <Section variant="gradient" padding="lg">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h1" align="center" className="mb-6">
              Meet Our{' '}
              <span className="text-gradient">Team</span>
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl mb-8">
              We&apos;re a passionate team of designers, developers, and strategists 
              dedicated to creating exceptional digital experiences.
            </Typography>
            <Button variant="primary" size="lg">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Team Members */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Our Team
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Get to know the talented individuals who bring your projects to life.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1}>
              <Card padding="md" className="text-center group" hover animated>
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <Typography variant="h5" className="mb-1">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="accent" weight="medium" className="mb-4">{member.role}</Typography>
                <Typography variant="body2" color="secondary" className="mb-6">{member.bio}</Typography>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.skills.map((skill) => (
                    <Typography
                      key={skill}
                      variant="caption"
                      component="span"
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                    >
                      {skill}
                    </Typography>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <Link
                      key={platform}
                      href={url}
                      className="w-10 h-10 bg-charcoal-100 rounded-full flex items-center justify-center text-charcoal-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <Typography variant="caption" weight="bold">
                        {platform === 'linkedin' ? 'in' : 
                         platform === 'twitter' ? '𝕏' :
                         platform === 'github' ? 'gh' :
                         platform === 'dribbble' ? 'dr' : '@'}
                      </Typography>
                    </Link>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Cooperation Models */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              How We Work
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Choose the collaboration model that best fits your project needs and business goals.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cooperationModels.map((model, index) => (
            <ScrollReveal key={model.title} delay={index * 0.1}>
              <Card padding="lg" className="h-full group" hover animated>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {model.icon}
                </div>
                
                <Typography variant="h4" className="mb-3">
                  {model.title}
                </Typography>
                
                <Typography variant="body2" color="secondary" className="mb-6">
                  {model.description}
                </Typography>

                <ul className="space-y-2 mb-6">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Typography variant="caption" className="text-green-500 mr-2 mt-0.5">✓</Typography>
                      <Typography variant="caption" className="text-charcoal-700">{feature}</Typography>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="border-t border-charcoal-200 pt-4">
                    <Typography variant="caption" color="muted" className="mb-1">Best for:</Typography>
                    <Typography variant="body2" weight="medium" className="mb-2">{model.bestFor}</Typography>
                    <Typography variant="caption" color="muted" className="mb-1">Duration:</Typography>
                    <Typography variant="body2" color="accent" weight="medium">{model.duration}</Typography>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Our Values
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </Typography>
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
                <Typography variant="h6" className="mb-3">
                  {value.title}
                </Typography>
                <Typography variant="caption" color="secondary">
                  {value.description}
                </Typography>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Common questions about working with our team and our processes.
            </Typography>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card padding="md" hover animated>
                <Typography variant="h6" className="mb-3">
                  {faq.question}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {faq.answer}
                </Typography>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white" padding="lg">
        <ScrollReveal>
          <div className="text-center">
            <Typography variant="h2" align="center" className="mb-4 text-white">
              Ready to Work Together?
            </Typography>
            <Typography variant="body1" align="center" className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-white">
              Let&apos;s discuss your project and find the perfect collaboration model 
              for your needs. Get in touch with us today.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
