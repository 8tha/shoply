import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totItems } = useContext(CartContext);
  return totItems > 0 ? (
    <div>
      <div className="product-grid">
        {cart.map((p) => {
          return <ProductCard key={p.id} p={p} />;
        })}
      </div>
      {cart.length > 0 && (
        <div>
          <button className="cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <Link to="/checkout">Checkout</Link>
        </div>
      )}
    </div>
  ) : (
    <h2>No items in the cart</h2>
  );
};

export default Cart;
