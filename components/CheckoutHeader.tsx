
import React from 'react';
import { Link } from 'react-router-dom';
import JiboiaIcon from './icons/JiboiaIcon';
import LockIcon from './icons/LockIcon';

const CheckoutHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-stone-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <JiboiaIcon className="w-8 h-8 text-emerald-700" />
          <span className="font-serif text-2xl font-bold text-stone-800 tracking-tight">
            Atelier Jiboia
          </span>
        </Link>

        <div className="flex items-center gap-2 text-sm text-stone-500">
            <LockIcon className="w-4 h-4"/>
            <span>Secure Checkout</span>
        </div>
      </div>
    </header>
  );
};

export default CheckoutHeader;
