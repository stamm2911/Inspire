import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (newItem) => {
    const newCart = [...cart, newItem];
    setCart(newCart);
  };

  const removeItem = (oldItem) => {
    console.log(oldItem);
    oldItem.toDelete = 'delet';
    console.log(oldItem);
    console.log(oldItem._id);
    const newCart = cart.filter((item) => {
      return !item.toDelete;
    });
    console.log(newCart);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
