
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import OrderSummary from '../components/OrderSummary';
import LockIcon from '../components/icons/LockIcon';

const CheckoutPage: React.FC = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(1);
    const [formState, setFormState] = useState({
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'France',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: '',
    });
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/shop');
        }
        window.scrollTo(0, 0);
    }, [cartItems, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormState(prevState => ({ ...prevState, [id]: value }));
    };

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setActiveStep(2);
    };

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            const orderId = clearCart();
            setIsProcessing(false);
            navigate('/confirmation', { state: { orderId, totalPrice } });
        }, 2000);
    };

    const shippingCost = 5.00;
    const finalTotal = totalPrice + shippingCost;
    
    const renderInput = (id: string, label: string, type: string = "text", placeholder: string = "", required: boolean = true) => (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-stone-700">{label}</label>
            <input
                type={type}
                id={id}
                name={id}
                className="mt-1 block w-full px-3 py-2 bg-white border border-stone-300 rounded-md shadow-sm placeholder-stone-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={placeholder}
                value={formState[id as keyof typeof formState]}
                onChange={handleInputChange}
                required={required}
            />
        </div>
    );

    return (
        <div className="bg-stone-100">
            <div className="container mx-auto px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
                <main className="lg:col-span-7">
                    {/* Step 1: Shipping */}
                    <form onSubmit={handleNextStep}>
                        <div className={`bg-white p-6 rounded-lg shadow-md transition-opacity duration-500 ${activeStep !== 1 ? 'opacity-50' : ''}`}>
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-bold font-serif">1. Shipping Address</h2>
                                {activeStep === 2 && <button type="button" onClick={() => setActiveStep(1)} className="text-sm font-semibold text-emerald-600 hover:underline">Edit</button>}
                            </div>
                            {activeStep === 1 && (
                                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                    <div className="sm:col-span-6">{renderInput('email', 'Email Address', 'email', 'you@example.com')}</div>
                                    <div className="sm:col-span-6">{renderInput('address', 'Address', 'text', '123 Rue de Rivoli')}</div>
                                    <div className="sm:col-span-2">{renderInput('city', 'City', 'text', 'Paris')}</div>
                                    <div className="sm:col-span-2">{renderInput('postalCode', 'Postal Code', 'text', '75001')}</div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="country" className="block text-sm font-medium text-stone-700">Country</label>
                                        <select id="country" name="country" className="mt-1 block w-full p-2 border border-stone-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500" value={formState.country} onChange={handleInputChange}>
                                            <option>France</option>
                                            <option>Brazil</option>
                                            <option>United States</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-6">
                                        <button type="submit" className="w-full bg-stone-800 text-white font-bold py-3 px-4 rounded-lg hover:bg-stone-900 transition-colors">Continue to Payment</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>

                    {/* Step 2: Payment */}
                    <form onSubmit={handlePlaceOrder}>
                         <div className={`bg-white p-6 rounded-lg shadow-md mt-8 transition-opacity duration-500 ${activeStep !== 2 ? 'opacity-50 pointer-events-none' : ''}`}>
                             <h2 className="text-2xl font-bold font-serif">2. Payment Details</h2>
                            {activeStep === 2 && (
                                <div className="mt-6 space-y-6">
                                    {renderInput('cardName', 'Name on Card')}
                                    {renderInput('cardNumber', 'Card Number', 'text', '•••• •••• •••• ••••')}
                                    <div className="grid grid-cols-2 gap-4">
                                        {renderInput('expiry', 'Expiry Date (MM/YY)', 'text', 'MM / YY')}
                                        {renderInput('cvc', 'CVC', 'text', '•••')}
                                    </div>
                                    <div className="pt-4">
                                        <button 
                                            type="submit" 
                                            disabled={isProcessing}
                                            className="w-full bg-emerald-600 text-white font-bold text-lg py-3 px-6 rounded-lg transition-colors transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 disabled:bg-emerald-400 disabled:cursor-wait flex items-center justify-center"
                                        >
                                            {isProcessing ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                                    <span>Processing...</span>
                                                </>
                                            ) : `Pay ${finalTotal.toFixed(2)} €`}
                                        </button>
                                        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-stone-500">
                                            <LockIcon className="w-4 h-4" />
                                            <span>Paiement 100% Sécurisé. On a besoin de l'argent.</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </main>

                <aside className="lg:col-span-5 mt-10 lg:mt-0">
                    <div className="sticky top-28">
                        <OrderSummary shippingCost={shippingCost} />
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CheckoutPage;
