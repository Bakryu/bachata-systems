'use client';

import { Typography, Section, Card, ScrollReveal } from '@/components/ui';

const faqs = [
  {
    question: "What's included in the support period?",
    answer:
      'Our support includes bug fixes, minor content updates, security updates, performance monitoring, and technical assistance. We also provide training materials and documentation.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer:
      "Absolutely! You can upgrade your plan at any time. We'll work with you to determine the best upgrade path and ensure a smooth transition.",
  },
  {
    question: 'Do you offer custom pricing for unique projects?',
    answer:
      'Yes, we understand that every project is unique. For complex or specialized requirements, we offer custom pricing tailored to your specific needs.',
  },
  {
    question: 'What happens after the support period ends?',
    answer:
      "After the initial support period, you can choose to extend support, purchase individual support hours, or manage the project independently. We're always here to help when needed.",
  },
  {
    question: 'Do you provide hosting services?',
    answer:
      "While we don't provide hosting directly, we can recommend reliable hosting providers and help you set up your hosting environment. We also offer managed hosting setup as an add-on service.",
  },
  {
    question: "What if I'm not satisfied with the final result?",
    answer:
      "Client satisfaction is our top priority. We work closely with you throughout the project and offer multiple revision rounds. If you're not satisfied, we'll work together to make it right.",
  },
];

export default function PricingFAQ() {
  return (
    <Section variant="muted" padding="lg">
      <ScrollReveal>
        <div className="text-center mb-16">
          <Typography variant="h2" align="center" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            align="center"
            className="text-xl max-w-3xl mx-auto"
          >
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
  );
}
