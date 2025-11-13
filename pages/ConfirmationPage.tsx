
import React, { useEffect } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
    const location = useLocation();
    const { orderId, totalPrice } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!orderId) {
        // Redirect if accessed directly without order info
        return <Navigate to="/" replace />;
    }
    
    return (
        <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-emerald-700">Merci! Your order is placed.</h1>
            <p className="mt-4 text-lg text-stone-600">
                We've received it. C'est magnifique! You will receive a confirmation email, 'no worries'.
            </p>

            <div className="mt-10 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-stone-200">
                <h2 className="text-xl font-bold text-stone-800">Order Summary</h2>
                <div className="mt-4 space-y-2 text-left">
                    <div className="flex justify-between">
                        <span className="text-stone-500">Order Number:</span>
                        <span className="font-mono font-bold text-stone-700">{orderId}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-stone-500">Order Total:</span>
                        <span className="font-bold text-stone-700">${(totalPrice + 5.00).toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <Link
                to="/shop"
                className="mt-12 inline-block bg-stone-800 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-stone-900 transition-transform transform hover:scale-105 duration-300"
            >
                Continue Shopping, maybe?
            </Link>
        </div>
    );
};

export default ConfirmationPage;
