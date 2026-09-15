import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (color, quantity) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.color.name === color.name,
      );
      if (existingItem) {
        return currentItems.map((item) =>
          item.color.name === color.name
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...currentItems, { color, quantity }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
