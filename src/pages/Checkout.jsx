import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, totPrice, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const processPayment = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 3000);
  };

  return (
    <div className="checkout">
      {!success && !loading && (
        <div>
          <h2>Order summary</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} x {item.quantity} = ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${totPrice}</h3>
          <form onSubmit={processPayment}>
            <h2>Insert Details</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
            />
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              placeholder="Card number"
              onChange={handleChange}
            />
            <button type="submit">Process Payment</button>
          </form>
        </div>
      )}

      {loading && !success && <h2>Processing the payment...</h2>}
      {!loading && success && (
        <div>
          <h2>Hello {formData.name},</h2>
          <p>
            the payment was successful! The order has been sent at{" "}
            {formData.address}. You'll receive an email at {formData.email} with
            the details of your order!
          </p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
