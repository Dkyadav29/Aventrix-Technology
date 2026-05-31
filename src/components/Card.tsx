import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hover = true }, ref) => {
    const hoverClass = hover ? 'hover:shadow-2xl hover:-translate-y-2 hover:border-primary-200' : '';
    return (
      <div
        ref={ref}
        className={`bg-white rounded-xl p-8 shadow-lg border border-gray-100 transition-all duration-300 ${hoverClass} ${className}`}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
