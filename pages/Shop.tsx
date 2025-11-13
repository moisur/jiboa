
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Shop: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-stone-800">
          Le Shop, <span className="italic">douw</span>!
        </h1>
        <p className="mt-3 text-lg text-stone-600">
          Here is all the stuff. Take your time, pas de problème.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
