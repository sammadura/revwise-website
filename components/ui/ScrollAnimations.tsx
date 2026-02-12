'use client';

import { ReactNode } from 'react';

// All animations removed - just clean pass-through wrappers
// The hover effects and CSS animations in the page still work

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}

export function ScrollScale({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function ParallaxSection({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {children}
    </section>
  );
}

export function FloatingElement({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerContainer({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  return <span>{value}{suffix}</span>;
}
