import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiRedux,
  SiMui,
  SiRedis,
  SiPostgresql,
  SiGatsby,
  SiGraphql,
  SiTailwindcss,
} from 'react-icons/si';

export const projects = [
  {
    id: 'dreamhost-panel',
    title: 'DreamHost Panel',
    description:
      'A modern, intuitive control panel for DreamHost users to manage websites, domains, and hosting with ease. Features include one-click installs, advanced DNS management, and real-time resource monitoring.',
    category: 'Web Hosting',
    technologies: [
      { name: 'React', icon: <FaReact className="text-2xl text-brand-blue" /> },
      { name: 'Redux', icon: <SiRedux className="text-2xl text-brand-violet" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-2xl text-brand-green" /> },
      { name: 'AWS', icon: <FaAws className="text-2xl text-brand-gold" /> },
      { name: 'MUI', icon: <SiMui className="text-2xl text-brand-blue" /> },
    ],
    metrics: [
      { icon: 'FaUsers', value: '2M+', label: 'Active Customers' },
      { icon: 'FaBolt', value: '1s', label: 'Avg. Response' },
      { icon: 'FaLock', value: '100%', label: 'SSL Coverage' },
    ],
    video: {
      desktop: 'https://dwagloaw4bttd.cloudfront.net/video/optimized/dashboard/dashboard.mp4',
      mobile: 'https://dwagloaw4bttd.cloudfront.net/video/optimized/dashboard/dashboard_small.mp4',
    },
    challenge:
      'DreamHost needed to modernize their control panel to handle millions of users while maintaining blazing-fast performance and industry-leading uptime. The existing system was outdated, difficult to navigate, and lacked real-time monitoring capabilities.',
    solution:
      'We built a completely new control panel using React and Redux for state management, ensuring a responsive and intuitive user interface. The backend was powered by Node.js with AWS infrastructure for scalability. We implemented real-time resource monitoring, one-click installations, and advanced DNS management tools.',
    results: [
      'Increased user satisfaction by 45% within the first quarter',
      'Reduced average response time to under 1 second',
      'Achieved 99.99% uptime for over 2 million active customers',
      '100% SSL coverage across all hosted domains',
      'Decreased support tickets by 35% due to improved UX',
    ],
    features: [
      {
        title: 'One-Click Installs',
        description:
          'Install popular applications like WordPress, Joomla, and Drupal with a single click.',
      },
      {
        title: 'Advanced DNS Management',
        description:
          'Full control over DNS settings with an intuitive interface for managing records.',
      },
      {
        title: 'Real-Time Monitoring',
        description:
          'Track resource usage, uptime, and performance metrics in real-time dashboards.',
      },
      {
        title: 'Security Dashboard',
        description:
          'Comprehensive security overview with SSL certificate management and threat detection.',
      },
    ],
    testimonial: {
      quote:
        'The new DreamHost Panel has transformed how our customers interact with their hosting services. The intuitive design and powerful features have significantly reduced support requests while increasing customer satisfaction.',
      author: 'John H.',
      role: 'Customer Experience Manager',
      company: 'DreamHost',
      avatar: '/avatars/john-h-avatar.jpeg',
    },
  },
  {
    id: 'promua-marketplace',
    title: 'Prom.ua Marketplace',
    description:
      'A robust shopping cart and marketplace app for Prom.ua, enabling seamless product discovery, secure checkout, and real-time order tracking for millions of users and merchants.',
    category: 'Marketplace',
    technologies: [
      { name: 'React.js', icon: <FaReact className="text-2xl text-brand-blue" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-2xl text-brand-green" /> },
      { name: 'Redis', icon: <SiRedis className="text-2xl text-brand-red" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-2xl text-brand-violet" /> },
    ],
    metrics: [
      { icon: 'FaBox', value: '2M+', label: 'Monthly Orders' },
      { icon: 'FaUserTie', value: '100K+', label: 'Active Sellers' },
      { icon: 'FaTruck', value: '24h', label: 'Avg. Delivery' },
    ],
    challenge:
      'Prom.ua needed a scalable marketplace platform to handle millions of transactions while providing seamless product discovery and secure payment processing. The challenge was to create an ecosystem that serves both buyers and sellers efficiently.',
    solution:
      'We developed a comprehensive marketplace solution using Vue.js for the frontend, ensuring fast and responsive user interfaces. The backend was built with Node.js, Redis for caching, and PostgreSQL for robust data management. We implemented advanced search algorithms, real-time inventory management, and secure payment gateways.',
    results: [
      'Processing over 2 million monthly orders with 99.9% success rate',
      'Onboarded 100,000+ active sellers within the first year',
      'Achieved average delivery time of 24 hours',
      'Reduced cart abandonment rate by 28%',
      'Increased mobile conversion by 42%',
    ],
    features: [
      {
        title: 'Smart Product Discovery',
        description:
          'AI-powered search and recommendation engine for personalized shopping experiences.',
      },
      {
        title: 'Seller Dashboard',
        description: 'Comprehensive analytics and inventory management tools for merchants.',
      },
      {
        title: 'Secure Checkout',
        description: 'Multi-payment gateway integration with PCI DSS compliance.',
      },
      {
        title: 'Order Tracking',
        description: 'Real-time order tracking with notifications for buyers and sellers.',
      },
    ],
    testimonial: {
      quote:
        'Bachata Systems delivered a marketplace platform that exceeded our expectations. The system handles millions of transactions seamlessly, and our sellers love the powerful dashboard tools.',
      author: 'Oleksandr Petrenko',
      role: 'CTO',
      company: 'Prom.ua',
      avatar: '/avatars/brian-glasman-avatar.jpeg',
    },
  },
  {
    id: 'dreamhost-website',
    title: 'DreamHost Website',
    description:
      "Complete rebuild of DreamHost's main website, creating a modern, high-performance platform that drives customer acquisition and enhances user experience. Features optimized conversion funnels, advanced SEO, and seamless integration with their hosting infrastructure.",
    category: 'Web Development',
    technologies: [
      { name: 'Gatsby.js', icon: <SiGatsby className="text-2xl text-brand-violet" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-2xl text-brand-blue" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl text-brand-blue" /> },
      { name: 'AWS', icon: <FaAws className="text-2xl text-brand-gold" /> },
    ],
    metrics: [
      { icon: 'FaUsers', value: '50K+', label: 'New Customers/Month' },
      { icon: 'FaBolt', value: '95+', label: 'Performance Score' },
      { icon: 'FaChartLine', value: '200%', label: 'Conversion Increase' },
    ],
    video: {
      desktop: '/movies/dreamhost-website.mp4',
      mobile: '/movies/dreamhost-website.mp4',
    },
    challenge:
      "DreamHost's website needed a complete overhaul to improve conversion rates, enhance user experience, and achieve top performance scores. The existing site was slow, difficult to navigate, and not optimized for modern SEO practices.",
    solution:
      'We rebuilt the entire website using Next.js and TypeScript for optimal performance and maintainability. Tailwind CSS was used for consistent, responsive design. We implemented advanced SEO strategies, optimized conversion funnels, and integrated seamlessly with their hosting infrastructure. The site was deployed on Vercel for edge performance.',
    results: [
      'Attracted 50,000+ new customers per month',
      'Achieved 95+ performance score on Google Lighthouse',
      'Increased conversion rate by 200%',
      'Reduced bounce rate by 45%',
      'Improved organic search traffic by 180%',
      'Decreased page load time by 65%',
    ],
    features: [
      {
        title: 'Optimized Conversion Funnels',
        description: 'Strategically designed user flows that guide visitors to become customers.',
      },
      {
        title: 'Advanced SEO',
        description: 'Technical SEO implementation with structured data and meta optimization.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Edge caching, image optimization, and lazy loading for lightning-fast speeds.',
      },
      {
        title: 'Seamless Integration',
        description:
          'Direct integration with hosting infrastructure for real-time account management.',
      },
    ],
    testimonial: {
      quote:
        "The new DreamHost website has been a game-changer for our business. We're seeing record numbers of new customers, and our conversion rates have skyrocketed. The team at Bachata Systems delivered beyond our wildest expectations.",
      author: 'Brian Glassman',
      role: 'Director of SEO',
      company: 'DreamHost',
      avatar: '/avatars/brian-glasman-avatar.jpeg',
    },
  },
];
