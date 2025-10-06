'use client';

import { useState } from 'react';
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
      'Basic Performance Optimization'
    ],
    popular: false,
    color: 'blue',
    deliveryTime: '2-3 weeks',
    revisions: '3 rounds'
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
      'Mobile App (Basic)'
    ],
    popular: true,
    color: 'purple',
    deliveryTime: '4-6 weeks',
    revisions: '5 rounds'
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
      'Dedicated Project Manager'
    ],
    popular: false,
    color: 'green',
    deliveryTime: '8-12 weeks',
    revisions: 'Unlimited'
  }
];

const addOns = [
  {
    name: 'Logo Design',
    description: 'Professional logo design with multiple concepts',
    price: 799,
    icon: '🎨'
  },
  {
    name: 'Content Writing',
    description: 'Professional copywriting for your website',
    price: 599,
    icon: '✍️'
  },
  {
    name: 'Photography',
    description: 'Professional product or team photography',
    price: 1299,
    icon: '📸'
  },
  {
    name: 'Social Media Setup',
    description: 'Complete social media presence setup',
    price: 499,
    icon: '📱'
  },
  {
    name: 'Email Marketing',
    description: 'Email marketing campaign setup and templates',
    price: 899,
    icon: '📧'
  },
  {
    name: 'Training Session',
    description: '2-hour training session for your team',
    price: 399,
    icon: '🎓'
  }
];

const faqs = [
  {
    question: 'What\'s included in the support period?',
    answer: 'Our support includes bug fixes, minor content updates, security updates, performance monitoring, and technical assistance. We also provide training materials and documentation.'
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! You can upgrade your plan at any time. We\'ll work with you to determine the best upgrade path and ensure a smooth transition.'
  },
  {
    question: 'Do you offer custom pricing for unique projects?',
    answer: 'Yes, we understand that every project is unique. For complex or specialized requirements, we offer custom pricing tailored to your specific needs.'
  },
  {
    question: 'What happens after the support period ends?',
    answer: 'After the initial support period, you can choose to extend support, purchase individual support hours, or manage the project independently. We\'re always here to help when needed.'
  },
  {
    question: 'Do you provide hosting services?',
    answer: 'While we don\'t provide hosting directly, we can recommend reliable hosting providers and help you set up your hosting environment. We also offer managed hosting setup as an add-on service.'
  },
  {
    question: 'What if I\'m not satisfied with the final result?',
    answer: 'Client satisfaction is our top priority. We work closely with you throughout the project and offer multiple revision rounds. If you\'re not satisfied, we\'ll work together to make it right.'
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Hero Section */}
      <Section variant="gradient" padding="lg">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <Typography variant="h1" align="center" className="mb-6">
              Simple, Transparent{' '}
              <span className="text-gradient">Pricing</span>
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl mb-8">
              Choose the perfect plan for your project. All plans include our signature 
              attention to detail and commitment to excellence.
            </Typography>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <Typography variant="body2" className={`mr-3 ${billingCycle === 'monthly' ? 'text-charcoal-950 font-medium' : 'text-charcoal-600'}`}>
                Project-based
              </Typography>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-charcoal-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <Typography variant="body2" className={`ml-3 ${billingCycle === 'yearly' ? 'text-charcoal-950 font-medium' : 'text-charcoal-600'}`}>
                Retainer (Save 17%)
              </Typography>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Pricing Plans */}
      <Section padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <Card className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''}`} hover animated>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <Typography variant="h4" className="mb-2">{plan.name}</Typography>
                    <Typography variant="body2" color="secondary" className="mb-4">{plan.description}</Typography>
                    
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
                        <Typography variant="caption" className="text-green-500 mr-3 mt-0.5">✓</Typography>
                        <Typography variant="body2">{feature}</Typography>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    fullWidth
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Add-ons Section */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Add-on Services
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Enhance your project with our additional services. Perfect for creating 
              a complete digital presence.
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

      {/* Comparison Table */}
      <Section padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Compare Plans
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              See what&apos;s included in each plan to make the best choice for your project.
            </Typography>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto">
            <Card className="w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-charcoal-200">
                    <th className="text-left p-6">
                      <Typography variant="h6">Features</Typography>
                    </th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.name} className="text-center p-6">
                        <Typography variant="h6">{plan.name}</Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Custom Design',
                    'Responsive Development',
                    'SEO Optimization',
                    'CMS Integration',
                    'E-commerce',
                    'Mobile App',
                    'API Development',
                    'DevOps Setup',
                    'Priority Support'
                  ].map((feature, index) => (
                    <tr key={feature} className="border-b border-charcoal-100">
                      <td className="p-6">
                        <Typography variant="body2">{feature}</Typography>
                      </td>
                      <td className="p-6 text-center">
                        {index < 3 ? (
                          <Typography variant="body2" className="text-green-500">✓</Typography>
                        ) : (
                          <Typography variant="body2" className="text-charcoal-300">—</Typography>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {index < 6 ? (
                          <Typography variant="body2" className="text-green-500">✓</Typography>
                        ) : (
                          <Typography variant="body2" className="text-charcoal-300">—</Typography>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        <Typography variant="body2" className="text-green-500">✓</Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </ScrollReveal>
      </Section>

      {/* FAQ Section */}
      <Section variant="muted" padding="lg">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Typography variant="h2" align="center" className="mb-4">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="secondary" align="center" className="text-xl max-w-3xl mx-auto">
              Got questions about our pricing? We&apos;ve got answers.
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
              Ready to Get Started?
            </Typography>
            <Typography variant="body1" align="center" className="text-xl mb-8 max-w-3xl mx-auto opacity-90 text-white">
              Have questions about which plan is right for you? Let&apos;s discuss your project 
              and find the perfect solution for your needs.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
