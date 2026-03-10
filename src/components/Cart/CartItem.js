import "./CartItem.css";

const CartItem = ({ item, removeFromCart }) => {

  return (
    <div className="cart-item">

      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>

    </div>
  );
};

export default CartItem;