import React, { useContext } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

const ProductCard = ({ p }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <img src={p.image} alt={p.title} />
      <div className="in-line">
        <h3 className="product-price">${p.price}</h3>
        {p.quantity && <h3 className="product-quantity">{p.quantity}</h3>}
      </div>
      <h2>
        <Link to={`/product/${p.id}`}>{p.title}</Link>
      </h2>
      <div className="in-line bottom">
        <button
          onClick={() => {
            addToCart(p);
          }}
        >
          Add to Cart
        </button>
        {cart.find((product) => product.id === p.id) && (
          <button
            onClick={() => {
              removeFromCart(p);
            }}
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
