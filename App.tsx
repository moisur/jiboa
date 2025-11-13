
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmationPage from './pages/ConfirmationPage';
import CheckoutHeader from './components/CheckoutHeader';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isCheckoutOrConfirmation = location.pathname === '/checkout' || location.pathname.startsWith('/confirmation');

  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen flex flex-col">
      {isCheckoutOrConfirmation ? <CheckoutHeader /> : <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:productId" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </main>
      {!isCheckoutOrConfirmation && <Footer />}
      <Cart />
    </div>
  );
};


function App() {
  return (
    <CartProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </CartProvider>
  );
}

export default App;