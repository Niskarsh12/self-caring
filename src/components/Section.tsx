import React from 'react';
import { Background } from './Background';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function Section({ children, className = '', variant = 'primary' }: SectionProps) {
  return (
    <section className={`relative ${className}`}>
      <Background variant={variant} />
      {children}
    </section>
  );
}