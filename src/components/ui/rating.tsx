"use client";

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  totalStars?: number;
  size?: number;
}

export const Rating = ({ rating, totalStars = 5, size = 16, className, ...props }: RatingProps) => {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className={cn('flex items-center gap-0.5', className)} {...props}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} className="text-accent fill-accent" />
      ))}
      {partialStar > 0.1 && (
        <div className="relative">
          <Star size={size} className="text-muted/60 fill-muted/60" />
          <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${partialStar * 100}%` }}>
            <Star size={size} className="text-accent fill-accent" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-muted/60 fill-muted/60" />
      ))}
    </div>
  );
};
