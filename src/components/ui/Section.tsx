import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'gradient' | 'muted';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
  component?: React.ElementType;
  noContainer?: boolean;
}

const variantStyles = {
  default: 'bg-DEFAULT',
  gradient: "bg-[url('/gradient_bg.webp')] bg-no-repeat bg-cover bg-bottom",
  muted: 'bg-charcoal-50',
};

const paddingStyles = {
  none: '',
  sm: 'py-8 lg:py-12',
  md: 'py-12 lg:py-16',
  lg: 'py-16 lg:py-24',
  xl: 'py-24 lg:py-32',
};

export default function Section({
  variant = 'default',
  padding = 'lg',
  containerSize = 'lg',
  children,
  component = 'section',
  noContainer = false,
  className,
  ...props
}: SectionProps) {
  const Component = component;

  const classes = cn(variantStyles[variant], paddingStyles[padding], className);

  const content = noContainer ? children : <Container size={containerSize}>{children}</Container>;

  return React.createElement(Component, { className: classes, ...props }, content);
}
