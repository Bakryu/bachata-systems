import { FC } from 'react';
import { Container } from '../ui';
import { Typography } from '../ui';
import { motion } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  points: string[];
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Initial Research',
    points: [
      "identify client's business goals and purposes of the website",
      'determine the target audience',
      'conduct competitive analysis',
    ],
  },
  {
    number: '02',
    title: 'Website Specification',
    points: [
      'identify required technical functionality',
      'classify content types',
      'create sitemap and architecture',
      'define technical scope',
      'document main site features and the scope in detail',
    ],
  },
  {
    number: '03',
    title: 'Design',
    points: [
      "review client's brand standards",
      'identify colors and fonts',
      'design graphic elements',
      'create homepage mockups',
      'design sub-pages based on the home page approved by the customer',
    ],
  },
  {
    number: '04',
    title: 'Frontend and backend coding',
    points: [
      'convert PSD to HTML and CSS',
      'set up CMS',
      'program any custom functionality, special features and interactivity',
      'customize backend',
    ],
  },
  {
    number: '05',
    title: 'Testing and deployment',
    points: [
      'populate the website pages with relevant content',
      'test performance on different devices and browsers',
      'track and correct bugs',
      'upload website files to a hosting server',
      'check site components on the live server',
      'assign user roles and train client on CMS',
    ],
  },
  {
    number: '06',
    title: 'Support and maintenance',
    points: [
      'monitor the site',
      'fix any bugs or errors',
      'update content',
      'keep the software updated',
      'create online marketing strategy',
    ],
  },
];

export const WebDevSteps: FC = () => {
  return (
    <section className="py-32 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <Typography variant="h2" className="mb-4 text-text-primary">
            Web Development Steps
          </Typography>
          <Typography variant="h3" className="text-text-secondary">
            to Perfect Website
          </Typography>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[50%] top-0 h-full w-px bg-border-subtle" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={step.number}
                className={`flex items-start gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Step number with gradient border */}
                <div className="flex-1 relative group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-accent-yellow via-accent-purple to-accent-blue opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl`}
                  />
                  <div className="relative bg-background-secondary p-8 rounded-2xl border border-border-subtle hover:border-accent-yellow transition-colors">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-accent-yellow to-accent-purple bg-clip-text text-transparent">
                        {step.number}
                      </span>
                      <Typography variant="h4" className="text-text-primary">
                        {step.title}
                      </Typography>
                    </div>
                    <ul className="space-y-3">
                      {step.points.map((point, index) => (
                        <motion.li
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          key={index}
                          className="flex items-start group"
                        >
                          <span className="h-2 w-2 mt-2 rounded-full bg-accent-yellow mr-3 group-hover:bg-accent-purple transition-colors" />
                          <Typography
                            variant="body1"
                            className="text-text-secondary group-hover:text-text-primary transition-colors"
                          >
                            {point}
                          </Typography>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Center dot */}
                <div className="relative min-w-[3rem] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent-yellow relative z-10">
                    <div className="absolute inset-0 bg-accent-yellow/30 animate-ping rounded-full" />
                  </div>
                </div>
                <div className="flex-1" /> {/* Empty space for alignment */}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WebDevSteps;
