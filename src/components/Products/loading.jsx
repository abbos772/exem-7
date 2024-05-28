import { useState, useEffect } from "react";
import { getData } from "@/fetch/index";
import Product from "../Products/Product";

const ProductPage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getData("products");
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Product Page</h1>
          <Product data={products} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
