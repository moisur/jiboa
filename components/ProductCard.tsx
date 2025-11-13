
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Use the first image of the first color variant as the display image
  const displayImage = product.colorVariants[0]?.imageUrls[0] || "https://picsum.photos/800/800";

  return (
    <div className="group flex flex-col bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <Link to={`/shop/${product.id}`} className="block aspect-w-1 aspect-h-1 w-full overflow-hidden">
        <img
          src={displayImage}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-4 flex flex-col items-start flex-grow">
        <h3 className="text-lg font-bold text-stone-800 font-serif">
           <Link to={`/shop/${product.id}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-sm">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-stone-500 flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center w-full">
            <p className="text-lg font-bold text-stone-900">${product.price.toFixed(2)}</p>
            <Link 
              to={`/shop/${product.id}`}
              className="bg-stone-800 text-white font-bold py-2 px-4 rounded-md hover:bg-stone-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Choisir
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
