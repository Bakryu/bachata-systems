'use client';

import { Typography, Section, Card, ScrollReveal } from '@/components/ui';

const addOns = [
  {
    name: 'Logo Design',
    description: 'Professional logo design with multiple concepts',
    price: 799,
    icon: '🎨',
  },
  {
    name: 'Content Writing',
    description: 'Professional copywriting for your website',
    price: 599,
    icon: '✍️',
  },
  {
    name: 'Photography',
    description: 'Professional product or team photography',
    price: 1299,
    icon: '📸',
  },
  {
    name: 'Social Media Setup',
    description: 'Complete social media presence setup',
    price: 499,
    icon: '📱',
  },
  {
    name: 'Email Marketing',
    description: 'Email marketing campaign setup and templates',
    price: 899,
    icon: '📧',
  },
  {
    name: 'Training Session',
    description: '2-hour training session for your team',
    price: 399,
    icon: '🎓',
  },
];

export default function AddOnsSection() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Section variant="muted" padding="lg">
      <ScrollReveal>
        <div className="text-center mb-16">
          <Typography variant="h2" align="center" className="mb-4">
            Add-on Services
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            align="center"
            className="text-xl max-w-3xl mx-auto"
          >
            Enhance your project with our additional services. Perfect for creating a complete
            digital presence.
          </Typography>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addOns.map((addon, index) => (
          <ScrollReveal key={addon.name} delay={index * 0.1}>
            <Card padding="md" className="text-center group" hover animated>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {addon.icon}
              </div>
              <Typography variant="h6" className="mb-2">
                {addon.name}
              </Typography>
              <Typography variant="caption" color="secondary" className="mb-4">
                {addon.description}
              </Typography>
              <Typography variant="h5" color="accent">
                {formatPrice(addon.price)}
              </Typography>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
