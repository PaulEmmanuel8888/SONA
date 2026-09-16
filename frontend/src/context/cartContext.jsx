import { createContext, useContext, useState, useEffect } from "react";

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
  useEffect(() => {
    console.log("Current Cart:", cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
