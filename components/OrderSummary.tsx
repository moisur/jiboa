
import React from 'react';
import { useCart } from '../hooks/useCart';

interface OrderSummaryProps {
    shippingCost: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ shippingCost }) => {
    const { cartItems, totalPrice } = useCart();
    const finalTotal = totalPrice + shippingCost;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200">
            <h2 className="text-2xl font-bold font-serif border-b pb-4">Order Summary</h2>
            <div className="space-y-4 py-4 border-b">
                {cartItems.map(item => (
                    <div key={item.sku} className="flex justify-between items-start">
                        <div className="flex items-start gap-4">
                            <img src={item.imageUrl} alt={item.productName} className="w-16 h-16 object-cover rounded-md"/>
                            <div>
                                <p className="font-bold">{item.productName}</p>
                                <p className="text-sm text-stone-500">{item.colorName} / {item.size}</p>
                                <p className="text-sm text-stone-500">Qty: {item.quantity}</p>
                            </div>
                        </div>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}
            </div>
            <div className="space-y-2 py-4 text-stone-700">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p className="font-semibold">${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                    <p>Shipping</p>
                    <p className="font-semibold">${shippingCost.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
                <p>Total</p>
                <p>${finalTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default OrderSummary;
