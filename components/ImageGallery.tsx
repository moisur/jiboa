
import React, { useState, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  if (!images || images.length === 0) {
    return <div className="aspect-w-1 aspect-h-1 bg-stone-100 rounded-lg flex items-center justify-center"><p>No image</p></div>;
  }

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-colors ${mainImage === img ? 'border-emerald-500' : 'border-transparent hover:border-stone-300'}`}
          >
            <img src={img} alt={`${alt} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-lg overflow-hidden shadow-lg aspect-w-1 aspect-h-1">
        <img src={mainImage} alt={alt} className="w-full h-full object-cover transition-opacity duration-300" />
      </div>
    </div>
  );
};

export default ImageGallery;
