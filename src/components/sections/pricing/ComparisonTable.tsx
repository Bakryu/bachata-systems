'use client';

import { Typography, Section, Card, ScrollReveal } from '@/components/ui';

const pricingPlans = [{ name: 'Starter' }, { name: 'Professional' }, { name: 'Enterprise' }];

const features = [
  { name: 'Custom Design', starter: true, professional: true, enterprise: true },
  { name: 'Responsive Development', starter: true, professional: true, enterprise: true },
  { name: 'SEO Optimization', starter: true, professional: true, enterprise: true },
  { name: 'CMS Integration', starter: false, professional: true, enterprise: true },
  { name: 'E-commerce', starter: false, professional: true, enterprise: true },
  { name: 'Mobile App', starter: false, professional: true, enterprise: true },
  { name: 'API Development', starter: false, professional: false, enterprise: true },
  { name: 'DevOps Setup', starter: false, professional: false, enterprise: true },
  { name: 'Priority Support', starter: false, professional: false, enterprise: true },
];

export default function ComparisonTable() {
  return (
    <Section padding="lg">
      <ScrollReveal>
        <div className="text-center mb-16">
          <Typography variant="h2" align="center" className="mb-4">
            Compare Plans
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            align="center"
            className="text-xl max-w-3xl mx-auto"
          >
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
                  {pricingPlans.map(plan => (
                    <th key={plan.name} className="text-center p-6">
                      <Typography variant="h6">{plan.name}</Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className="border-b border-charcoal-100">
                    <td className="p-6">
                      <Typography variant="body2">{feature.name}</Typography>
                    </td>
                    <td className="p-6 text-center">
                      {feature.starter ? (
                        <Typography variant="body2" className="text-green-500">
                          ✓
                        </Typography>
                      ) : (
                        <Typography variant="body2" className="text-charcoal-300">
                          —
                        </Typography>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.professional ? (
                        <Typography variant="body2" className="text-green-500">
                          ✓
                        </Typography>
                      ) : (
                        <Typography variant="body2" className="text-charcoal-300">
                          —
                        </Typography>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {feature.enterprise ? (
                        <Typography variant="body2" className="text-green-500">
                          ✓
                        </Typography>
                      ) : (
                        <Typography variant="body2" className="text-charcoal-300">
                          —
                        </Typography>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </ScrollReveal>
    </Section>
  );
}
