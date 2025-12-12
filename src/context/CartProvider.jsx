import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totItems, setTotItems] = useState(0);

  const totPrice = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === existingProduct.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setTotItems((prevNum) => prevNum + 1);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);

      if (!existingProduct) return prevCart;

      if (existingProduct.quantity === 1) {
        return prevCart.filter((p) => p.id !== product.id);
      }

      return prevCart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      );
    });

    setTotItems((prevNum) => prevNum - 1);
  };

  const clearCart = () => {
    setCart([]);

    setTotItems(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totItems, totPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
