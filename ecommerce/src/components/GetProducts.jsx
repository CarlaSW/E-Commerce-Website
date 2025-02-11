import { useContext, useEffect } from "react";
import { UserContext } from "../context/Provider";

export default function GetProducts() {
  const URL = "https://ecommerce.routemisr.com/api/v1/products";
  const { products, setProducts } = useContext(UserContext);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(URL);
      const results = await response.json();
      //console.log(results.data);
      setProducts(results.data);
    }
    fetchProducts();
  }, []);
  return <div></div>;
}
