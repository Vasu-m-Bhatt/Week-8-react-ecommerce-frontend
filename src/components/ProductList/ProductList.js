import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
const ProductList = () => {

  const products = useProducts();

  return (
    <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
      {products.map(product => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;