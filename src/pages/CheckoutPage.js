import "./CheckoutPage.css";
import { useState } from "react";

const CheckoutPage = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    address:"",
    city:"",
    pincode:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (

    <div className="checkout-container">

      <h2>Checkout</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pin Code"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>

  );
};

export default CheckoutPage;