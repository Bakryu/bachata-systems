import { Typography, Section, Container, Card, ScrollReveal, Button } from '@/components/ui';
import { FaRocket, FaPaintBrush, FaCogs, FaTools } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: <FaRocket />, // Rocket icon
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design that creates meaningful and delightful experiences.',
    icon: <FaPaintBrush />, // Paintbrush icon
  },
  {
    title: 'CMS Development',
    description: 'Custom CMS Built for Speed and Scale.',
    icon: <FaCogs />, // Cogs icon
  },
  {
    title: 'Support & Maintenance',
    description: 'Ongoing support to keep your digital products running smoothly.',
    icon: <FaTools />, // Tools icon
  },
];

export default function ServicesPreview() {
  return (
    <Section padding="lg">
      <ScrollReveal>
        <div className="text-center mb-16">
          <Typography variant="h2" align="center" className="mb-4">
            Our Services
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            align="center"
            className="text-xl max-w-3xl mx-auto"
          >
            We offer comprehensive digital solutions to help your business thrive in the digital
            landscape.
          </Typography>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.1}>
            <Card
              padding="lg"
              className="text-center group hover:shadow-xl transition-all duration-300"
              hover
              animated
            >
              <div className="inline-block text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-center">
                {service.icon}
              </div>
              <Typography variant="h6" className="mb-3 text-center">
                {service.title}
              </Typography>
              <Typography variant="body2" color="secondary" className="text-center">
                {service.description}
              </Typography>
            </Card>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="text-center mt-12">
          <Button variant="outline" size="md">
            <a href="/services">View All Services</a>
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
}
