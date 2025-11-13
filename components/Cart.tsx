
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  const { isCartOpen, toggleCart, cartItems, totalPrice, clearCart } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleCart}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-stone-200">
            <h2 className="text-2xl font-bold font-serif text-stone-800">Mon Panier</h2>
            <button
              onClick={toggleCart}
              className="p-2 rounded-full text-stone-500 hover:bg-stone-100 hover:text-stone-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {cartItems.length > 0 ? (
            <>
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cartItems.map(item => (
                  // FIX: Use `item.sku` for the key, as `CartItem` does not have an `id` property. The SKU is the unique identifier.
                  <CartItem key={item.sku} item={item} />
                ))}
              </div>
              <div className="p-6 border-t border-stone-200 bg-stone-50">
                <div className="flex justify-between items-center text-lg font-bold mb-4">
                  <span>Total, basically:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={toggleCart}
                  className="w-full text-center bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors duration-300 block"
                >
                  Checkout, s'il vous plaît
                </Link>
                <button onClick={clearCart} className="w-full text-center text-sm text-stone-500 hover:text-red-500 mt-2 transition-colors">
                    Vider le panier
                </button>
              </div>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
              <h3 className="text-xl font-bold text-stone-700">Votre panier est vide.</h3>
              <p className="text-stone-500 mt-2">Your cart is empty. Triste!</p>
              <button onClick={toggleCart} className="mt-6 bg-stone-800 text-white font-bold py-2 px-6 rounded-md hover:bg-stone-900 transition-colors">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;