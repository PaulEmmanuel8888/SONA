import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("sona-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("sona-cart", JSON.stringify(cartItems));
  }, [cartItems]);

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

  const updateQuantity = (colorName, newQuantity) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.color.name === colorName
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  };

  const removeFromCart = (colorName) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.color.name !== colorName),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
