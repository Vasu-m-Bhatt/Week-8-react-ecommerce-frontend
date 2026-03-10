import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";

const CartPage = () => {

  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>

      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
        />
      ))}

      {cart.length > 0 && (
        <div style={{textAlign:"center", marginTop:"20px"}}>
          
          <Link to="/checkout">
            <button style={{
              padding:"10px 20px",
              background:"#2a5298",
              color:"white",
              border:"none",
              borderRadius:"5px",
              cursor:"pointer"
            }}>
              Proceed to Checkout
            </button>
          </Link>

        </div>
      )}

    </div>
  );
};

export default CartPage;