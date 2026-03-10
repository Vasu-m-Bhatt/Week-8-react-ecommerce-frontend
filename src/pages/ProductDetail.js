import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/api";

const ProductDetail = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };

    getProduct();

  }, [id]);

  if(!product) return <h2>Loading...</h2>

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} width="150"/>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
  );
};

export default ProductDetail;