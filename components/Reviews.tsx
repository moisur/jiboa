
import React from 'react';
import type { Product } from '../types';
import StarRating from './StarRating';

interface ReviewsProps {
  product: Product;
  averageRating: number;
}

const Reviews: React.FC<ReviewsProps> = ({ product, averageRating }) => {
  return (
    <section id="reviews" className="container mx-auto px-6 py-12 md:py-16 border-t border-stone-200">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold font-serif text-stone-800">Avis des Clients</h2>
          <div className="mt-4 flex items-center gap-2">
            <p className="text-4xl font-bold">{averageRating.toFixed(1)}</p>
            <div>
              <StarRating rating={averageRating} />
              <p className="text-sm text-stone-500 mt-1">Basé sur {product.reviews.length} avis</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-8">
          {product.reviews.map(review => (
            <div key={review.id} className="border-b border-stone-200 pb-6">
              <StarRating rating={review.rating} />
              <p className="mt-2 text-stone-700 italic">"{review.comment}"</p>
              <p className="mt-3 text-sm text-stone-500">
                <span className="font-bold text-stone-600">{review.author}</span> on {review.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
