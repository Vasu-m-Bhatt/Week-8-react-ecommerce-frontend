import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return products;
};

export default useProducts;