'use client';

import { Typography, Section, Card, Button, Link, ScrollReveal } from '@/components/ui';

type BillingCycle = 'monthly' | 'yearly';

type PricingPlansProps = {
  billingCycle: BillingCycle;
};

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: { monthly: 2999, yearly: 29990 },
    features: [
      'Custom Website Design',
      'Responsive Development',
      'Basic SEO Setup',
      'Contact Form Integration',
      '3 Months Support',
      'Google Analytics Setup',
      'Social Media Integration',
      'Basic Performance Optimization',
    ],
    popular: false,
    color: 'blue',
    deliveryTime: '2-3 weeks',
    revisions: '3 rounds',
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: { monthly: 4999, yearly: 49990 },
    features: [
      'Everything in Starter',
      'Advanced Custom Features',
      'CMS Integration',
      'E-commerce Functionality',
      'Advanced SEO Optimization',
      '6 Months Support',
      'Performance Monitoring',
      'Security Implementation',
      'Third-party Integrations',
      'Mobile App (Basic)',
    ],
    popular: true,
    color: 'purple',
    deliveryTime: '4-6 weeks',
    revisions: '5 rounds',
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications',
    price: { monthly: 9999, yearly: 99990 },
    features: [
      'Everything in Professional',
      'Custom Backend Development',
      'Advanced Database Design',
      'API Development',
      'DevOps & Cloud Setup',
      '12 Months Support',
      'Priority Support',
      'Advanced Analytics',
      'Multi-language Support',
      'Advanced Security Features',
      'Load Balancing',
      'Dedicated Project Manager',
    ],
    popular: false,
    color: 'green',
    deliveryTime: '8-12 weeks',
    revisions: 'Unlimited',
  },
];

export default function PricingPlans({ billingCycle }: PricingPlansProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Section padding="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <ScrollReveal key={plan.name} delay={index * 0.1}>
            <Card
              className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`}
              hover
              animated
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="text-center mb-8">
                  <Typography variant="h4" className="mb-2">
                    {plan.name}
                  </Typography>
                  <Typography variant="body2" color="secondary" className="mb-4">
                    {plan.description}
                  </Typography>

                  <div className="mb-4">
                    <Typography variant="h2" component="span">
                      {formatPrice(plan.price[billingCycle])}
                    </Typography>
                    <Typography variant="body2" color="secondary" component="span" className="ml-2">
                      {billingCycle === 'monthly' ? 'per project' : 'per month'}
                    </Typography>
                  </div>

                  <div className="flex justify-center space-x-4 text-sm text-charcoal-600 mb-6">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-1">⏱️</span>
                      <Typography variant="caption">{plan.deliveryTime}</Typography>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-1">🔄</span>
                      <Typography variant="caption">{plan.revisions}</Typography>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Typography variant="caption" className="text-green-500 mr-3 mt-0.5">
                        ✓
                      </Typography>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.popular ? 'primary' : 'outline'} fullWidth>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
