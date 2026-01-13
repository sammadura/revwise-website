import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-8 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function CardTitle({ children, icon, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${className}`}>
      {icon && <span className="text-primary">{icon}</span>}
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <p className={`text-gray-medium leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
