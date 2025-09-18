'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCTA from '@/components/ui/AnimatedCTA';

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
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-950 mb-6">
                Simple, Transparent{' '}
                <span className="text-gradient">Pricing</span>
              </h1>
              <p className="text-xl text-charcoal-600 mb-8">
                Choose the perfect plan for your project. All plans include our signature 
                attention to detail and commitment to excellence.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8">
                <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-charcoal-950 font-medium' : 'text-charcoal-600'}`}>
                  Project-based
                </span>
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
                <span className={`ml-3 ${billingCycle === 'yearly' ? 'text-charcoal-950 font-medium' : 'text-charcoal-600'}`}>
                  Retainer (Save 17%)
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 0.1}>
                <motion.div
                  className={`card relative overflow-hidden ${
                    plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-charcoal-950 mb-2">{plan.name}</h3>
                      <p className="text-charcoal-600 mb-4">{plan.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-charcoal-950">
                          {formatPrice(plan.price[billingCycle])}
                        </span>
                        <span className="text-charcoal-600 ml-2">
                          {billingCycle === 'monthly' ? 'per project' : 'per month'}
                        </span>
                      </div>

                      <div className="flex justify-center space-x-4 text-sm text-charcoal-600 mb-6">
                        <div className="flex items-center">
                          <span className="text-green-500 mr-1">⏱️</span>
                          {plan.deliveryTime}
                        </div>
                        <div className="flex items-center">
                          <span className="text-blue-500 mr-1">🔄</span>
                          {plan.revisions}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-0.5">✓</span>
                          <span className="text-charcoal-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <AnimatedCTA
                      href="/contact"
                      variant={plan.popular ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      Get Started
                    </AnimatedCTA>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Add-on Services
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                Enhance your project with our additional services. Perfect for creating 
                a complete digital presence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <ScrollReveal key={addon.name} delay={index * 0.1}>
                <motion.div
                  className="card p-6 text-center group"
                  whileHover={{ y: -3 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {addon.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal-950 mb-2">
                    {addon.name}
                  </h3>
                  <p className="text-charcoal-600 mb-4 text-sm">
                    {addon.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatPrice(addon.price)}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-950 mb-4">
                Compare Plans
              </h2>
              <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
                See what's included in each plan to make the best choice for your project.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full card">
                <thead>
                  <tr className="border-b border-charcoal-200">
                    <th className="text-left p-6 font-semibold text-charcoal-950">Features</th>
                    {pricingPlans.map((plan) => (
                      <th key={plan.name} className="text-center p-6 font-semibold text-charcoal-950">
                        {plan.name}
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
                      <td className="p-6 text-charcoal-700">{feature}</td>
                      <td className="p-6 text-center">
                        {index < 3 ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-charcoal-300">—</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {index < 6 ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-charcoal-300">—</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-green-500">✓</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
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
                Got questions about our pricing? We've got answers.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Have questions about which plan is right for you? Let's discuss your project 
              and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedCTA href="/contact" variant="secondary" size="lg">
                Get Free Consultation
              </AnimatedCTA>
              <AnimatedCTA href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Our Work
              </AnimatedCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
