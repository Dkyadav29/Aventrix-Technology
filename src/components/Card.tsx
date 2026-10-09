import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true }, ref) => {
    return (
      <div
        ref={ref}
        className={`surface p-6 md:p-8 text-gray-900 dark:text-gray-100 ${hover ? 'surface-hover' : ''} ${className}`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
