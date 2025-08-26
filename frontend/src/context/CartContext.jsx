import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children, user }) {
  const [cartItems, setCartItems] = useState([]);

  // Load cart for current user from localStorage
  useEffect(() => {
    if (user) {
      const storedCart = localStorage.getItem(`cart_${user.username}`);
      setCartItems(storedCart ? JSON.parse(storedCart) : []);
    } else {
      setCartItems([]);
    }
  }, [user]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.username}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  // ➕ Add to cart
  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      if (existing) {
        // Calculate new quantity but do not exceed stock
        const newQuantity = Math.min(
          existing.quantity + quantity,
          product.stock
        );
        return prev.map((item) =>
          item._id === product._id ? { ...item, quantity: newQuantity } : item
        );
      }

      // For new items, don't allow adding more than stock
      return [
        ...prev,
        { ...product, quantity: Math.min(quantity, product.stock) },
      ];
    });
  };

  // ❌ Remove one item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // 🧹 Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    if (user) {
      localStorage.removeItem(`cart_${user.username}`);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
