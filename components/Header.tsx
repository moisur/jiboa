
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import JiboiaIcon from './icons/JiboiaIcon';
import ShoppingBagIcon from './icons/ShoppingBagIcon';

const Header: React.FC = () => {
  const { toggleCart, cartCount } = useCart();
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${isActive ? 'text-emerald-600' : 'text-stone-700 hover:text-emerald-500'}`;

  return (
    <header className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 group">
          <JiboiaIcon className="w-8 h-8 text-emerald-700 group-hover:animate-pulse" />
          <span className="font-serif text-2xl font-bold text-stone-800 tracking-tight">
            Atelier Jiboia
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/shop" className={navLinkClass}>Le Shop</NavLink>
          <span className="text-sm font-bold uppercase tracking-wider text-stone-400 cursor-not-allowed">Furthermore</span>
        </nav>

        <div className="flex items-center">
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-full text-stone-700 hover:bg-stone-200 transition-colors"
            aria-label="Open shopping cart"
          >
            <ShoppingBagIcon className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
