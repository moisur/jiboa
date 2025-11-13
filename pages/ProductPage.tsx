
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import SizeGuideModal from '../components/SizeGuideModal';
import ImageGallery from '../components/ImageGallery';
import StickyAddToCart from '../components/StickyAddToCart';
import type { ColorVariant } from '../types';
import FacebookIcon from '../components/icons/FacebookIcon';
import TwitterIcon from '../components/icons/TwitterIcon';
import PinterestIcon from '../components/icons/PinterestIcon';

type SizeOption = {
  size: 'S' | 'M' | 'L' | 'XL';
  sku: string;
};

const ProductPage: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    
    const product = useMemo(() => PRODUCTS.find(p => p.id === parseInt(productId || '')), [productId]);

    const [selectedColor, setSelectedColor] = useState<ColorVariant | null>(product ? product.colorVariants[0] : null);
    const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
    const [showSticky, setShowSticky] = useState(false);
    
    const addToCartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setShowSticky(!entry.isIntersecting); },
            { rootMargin: "-100px 0px 0px 0px" }
        );

        if (addToCartRef.current) observer.observe(addToCartRef.current);
        return () => { if (addToCartRef.current) observer.unobserve(addToCartRef.current); };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        if(product) {
            setSelectedColor(product.colorVariants[0]);
            setSelectedSize(null);
            setQuantity(1);
            setIsAdding(false);
        }
    }, [productId, product]);

    const averageRating = useMemo(() => {
        if (!product || !product.reviews || product.reviews.length === 0) return 0;
        const total = product.reviews.reduce((acc, review) => acc + review.rating, 0);
        return total / product.reviews.length;
    }, [product]);

    if (!product) {
        // ... (error handling JSX)
        return <div>Product not found</div>;
    }

    const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

    const handleColorSelect = (color: ColorVariant) => {
        setSelectedColor(color);
        setSelectedSize(null); // Reset size selection when color changes
    };

    const handleAddToCart = () => {
        if (!selectedColor || !selectedSize) return;
        setIsAdding(true);
        addToCart(product, selectedColor, selectedSize, quantity);
        setTimeout(() => { setIsAdding(false); }, 2000);
    };

    // Social Share URLs
    const pageUrl = window.location.href;
    const shareText = `Check out this cool T-shirt: ${product.name} from Atelier Jiboia!`;
    const shareImage = selectedColor?.imageUrls[0] || '';

    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;
    const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(shareImage)}&description=${encodeURIComponent(shareText)}`;


    return (
        <div className="animate-fade-in">
             <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
             {/* Sticky Add to Cart needs to be updated to handle variants */}

            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {selectedColor && <ImageGallery key={selectedColor.colorName} images={selectedColor.imageUrls} alt={product.name} />}

                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl lg:text-5xl font-bold font-serif text-stone-800">{product.name}</h1>
                        
                        {product.reviews.length > 0 && (
                            <div className="flex items-center gap-2">
                                <StarRating rating={averageRating} />
                                <a href="#reviews" className="text-sm text-stone-500 hover:underline">({product.reviews.length} avis)</a>
                            </div>
                        )}

                        <p className="text-3xl font-bold text-emerald-700">${product.price.toFixed(2)}</p>
                        
                        {/* Color Selector */}
                        <div>
                            <h3 className="text-sm font-bold text-stone-700">Couleur: <span className="font-normal">{selectedColor?.colorName}</span></h3>
                            <div className="flex items-center gap-2 mt-2">
                                {product.colorVariants.map(color => (
                                    <button 
                                        key={color.colorName}
                                        onClick={() => handleColorSelect(color)}
                                        className={`w-8 h-8 rounded-full border-2 transition-transform transform hover:scale-110 ${selectedColor?.colorName === color.colorName ? 'border-emerald-500 scale-110' : 'border-stone-300'}`}
                                        style={{ backgroundColor: color.colorHex }}
                                        aria-label={`Select color ${color.colorName}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div className="mt-2">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-stone-700">Taille:</h3>
                                <button onClick={() => setIsSizeGuideOpen(true)} className="text-sm font-semibold text-emerald-600 hover:underline">Guide des tailles</button>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                {selectedColor?.sizes.map(size => (
                                    <button
                                        key={size.sku}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 border rounded-md font-bold text-sm transition-colors ${selectedSize?.sku === size.sku ? 'bg-stone-800 text-white border-stone-800' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'}`}
                                    >
                                        {size.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <p className="text-stone-600 text-lg leading-relaxed mt-4">{product.description}</p>
                        
                        <div ref={addToCartRef} className="mt-4 flex flex-col sm:flex-row items-stretch gap-4">
                             <div className="flex items-center border border-stone-300 rounded-md justify-between">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 text-xl font-bold text-stone-600 hover:bg-stone-100 rounded-l-md transition-colors" aria-label="Decrease quantity">-</button>
                                <span className="px-5 py-2 w-16 text-center font-bold text-lg">{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 text-xl font-bold text-stone-600 hover:bg-stone-100 rounded-r-md transition-colors" aria-label="Increase quantity">+</button>
                            </div>
                            <button 
                                onClick={handleAddToCart} 
                                disabled={!selectedColor || !selectedSize || isAdding}
                                className={`flex-grow flex items-center justify-center bg-emerald-600 text-white font-bold text-lg py-3 px-6 rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:bg-stone-400 disabled:cursor-not-allowed ${isAdding ? 'bg-green-500' : 'hover:bg-emerald-700 hover:scale-105'}`}
                            >
                                {isAdding ? 'Ajouté!' : (!selectedColor || !selectedSize ? 'Select Options' : 'Ajouter au Panier')}
                            </button>
                        </div>
                        
                        {/* Social Share Section */}
                        <div className="mt-6 pt-4 border-t border-stone-200">
                            <h4 className="text-sm font-bold text-stone-600 uppercase tracking-wider">Share this masterpiece:</h4>
                            <div className="flex items-center gap-4 mt-3">
                                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="text-stone-500 hover:text-[#1877F2] transition-colors">
                                    <FacebookIcon className="w-6 h-6" />
                                </a>
                                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="text-stone-500 hover:text-[#1DA1F2] transition-colors">
                                    <TwitterIcon className="w-6 h-6" />
                                </a>
                                <a href={pinterestShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Pinterest" className="text-stone-500 hover:text-[#E60023] transition-colors">
                                    <PinterestIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Details, story, reviews, related products sections remain */}
        </div>
    );
};
export default ProductPage;
