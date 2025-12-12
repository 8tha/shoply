import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.css";
import CartContext from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <div className="product-detail">
      <div className="left">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="right">
        <h3>${product.price}</h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button
          onClick={() => {
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
        {cart.find((p) => p.id === product.id) && (
          <button
            onClick={() => {
              removeFromCart(product);
            }}
          >
            Remove from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
