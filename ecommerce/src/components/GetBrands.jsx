import { useContext, useEffect, useState } from "react";
import Brand from "./Brand";
import { UserContext } from "../context/Provider";

export default function GetBrands() {
  const URL = "https://ecommerce.routemisr.com/api/v1/brands";
  const { brands, setBrands } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchBrands() {
      const response = await fetch(URL);
      const result = await response.json();
      //console.log(result.data);
      setBrands(result.data);
      setIsLoading(false);
    }
    fetchBrands();
  }, []);
  return <div></div>;
}
