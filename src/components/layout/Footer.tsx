"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCTA from "../ui/AnimatedCTA";

const footerLinks = {
  Services: [
    { name: "Web Development", href: "/services/development" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Consulting", href: "/services" },
    { name: "Support", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/team" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
  Resources: [
    { name: "Blog", href: "/resources" },
    { name: "Case Studies", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/team" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: "𝕏" },
  { name: "LinkedIn", href: "#", icon: "in" },
  { name: "GitHub", href: "#", icon: "gh" },
  { name: "Dribbble", href: "#", icon: "dr" },
];

export default function Footer() {
  return (
    <footer className="bg-background text-text-primary">
      {/* Newsletter Section */}
      <div className="border-b border-border-subtle">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Get weekly updates on design trends, development tips, and
                industry insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-secondary border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-yellow focus:border-transparent"
                />
                <AnimatedCTA variant="primary" size="md">
                  Subscribe
                </AnimatedCTA>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-yellow to-accent-purple rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-background">H</span>
              </div>
              <span className="text-2xl font-bold">Bachata-team</span>
            </Link>

            <p className="text-text-secondary mb-6 max-w-md">
              We're a creative digital agency that helps startups and
              enterprises build exceptional web experiences that drive results
              and inspire users.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background-secondary rounded-lg flex items-center justify-center text-text-muted hover:bg-accent-blue hover:text-text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-subtle">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              © 2024 Bachata-team. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
