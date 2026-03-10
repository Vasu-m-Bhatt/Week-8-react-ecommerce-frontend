import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.css";
const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt="" width="100"/>
      <h4>{product.title}</h4>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        View
      </Link>

      <br/>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;