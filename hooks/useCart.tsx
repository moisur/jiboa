
import React from 'react';
import { CartItem, Product, ColorVariant } from '../types';

type SizeOption = {
  size: 'S' | 'M' | 'L' | 'XL';
  sku: string;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, color: ColorVariant, size: SizeOption, quantity?: number) => void;
  removeFromCart: (sku: string) => void;
  updateQuantity: (sku: string, quantity: number) => void;
  clearCart: () => string; // Returns an orderId
  cartCount: number;
  totalPrice: number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = React.createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const toggleCart = React.useCallback(() => {
    setIsCartOpen(prev => !prev);
  }, []);

  const addToCart = React.useCallback((product: Product, color: ColorVariant, size: SizeOption, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.sku === size.sku);
      if (existingItem) {
        return prevItems.map(item =>
          item.sku === size.sku ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      const newItem: CartItem = {
          productId: product.id,
          sku: size.sku,
          productName: product.name,
          price: product.price,
          quantity,
          size: size.size,
          colorName: color.colorName,
          imageUrl: color.imageUrls[0],
      };
      return [...prevItems, newItem];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = React.useCallback((sku: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.sku !== sku));
  }, []);

  const updateQuantity = React.useCallback((sku: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(sku);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.sku === sku ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromCart]);

  const clearCart = React.useCallback(() => {
    const orderId = `AJ-${Date.now().toString().slice(-6)}`;
    setCartItems([]);
    return orderId;
  }, []);

  const cartCount = React.useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const totalPrice = React.useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    totalPrice,
    isCartOpen,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
