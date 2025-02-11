import { createContext, useReducer, useState } from "react";
import GetProducts from "../components/GetProducts";
import GetCategories from "../components/GetCategories";
import GetBrands from "../components/GetBrands";

export const UserContext = createContext();

export default function Provider({ children }) {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishes, setWishes] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [cartId, setCartId] = useState("");
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        email,
        setEmail,
        password,
        setPassword,
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        products,
        setProducts,
        brands,
        setBrands,
        selectedBrandId,
        setSelectedBrandId,
        query,
        setQuery,
        searchList,
        setSearchList,
        product,
        setProduct,
        cart,
        setCart,
        wishes,
        setWishes,
        totalCost,
        setTotalCost,
        cartId,
        setCartId,
        userData,
        setUserData,
      }}
    >
      <GetCategories />
      <GetBrands />
      <GetProducts />
      {children}
    </UserContext.Provider>
  );
}
