import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Provider";

export default function GetCategories() {
  const URL = "https://ecommerce.routemisr.com/api/v1/categories";
  const { categories, setCategories } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(URL);
      const result = await response.json();
      //console.log(result.data);
      setCategories(result.data);
      setIsLoading(false);
    }
    fetchCategories();
  }, []);
  return <div></div>;
}
