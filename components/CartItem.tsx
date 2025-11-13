
import React from 'react';
import type { CartItem as CartItemType } from '../types';
import { useCart } from '../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.sku, newQuantity);
    }
  };

  return (
    <div className="flex items-start gap-4 py-2">
      <img src={item.imageUrl} alt={item.productName} className="w-20 h-20 object-cover rounded-md border" />
      <div className="flex-grow">
        <h4 className="font-bold text-stone-800">{item.productName}</h4>
        <p className="text-sm text-stone-500">
            {item.colorName} / {item.size}
        </p>
        <p className="text-sm text-stone-500">${item.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center gap-2">
          <input
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-16 p-1 border border-stone-300 rounded-md text-center"
            aria-label={`Quantity for ${item.productName}`}
          />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.sku)} className="text-xs text-red-500 hover:underline mt-1">
            Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
