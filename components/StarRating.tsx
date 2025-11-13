
import React from 'react';
import StarIcon from './icons/StarIcon';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${
              rating >= starValue
                ? 'text-yellow-400'
                : 'text-stone-300'
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
