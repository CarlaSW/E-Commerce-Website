import { useContext, useEffect, useState } from "react";
import styles from "./header.module.css";
import { UserContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import styles2 from "./search.module.css";
import stringSimilarity from "string-similarity";

export default function Search() {
  const navigate = useNavigate();
  const { query, setQuery, products, searchList, setSearchList } =
    useContext(UserContext);
  let queryTemp = "";

  useEffect(() => {
    // Reset searchList to an empty array
    setSearchList([]);

    // Calculate similarity and handle search
    const similarity = stringSimilarity.compareTwoStrings(queryTemp, query);

    if (!similarity) {
      queryTemp = query;

      // Filter products that match the query and update searchList
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      setSearchList(filteredProducts);
      console.log("Updated searchList:", filteredProducts);
    }
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="What do you search for ?"
        value={query}
        onChange={(e) => {
          handleSearch(e);
        }}
      ></input>
      <div>{console.log(searchList)}</div>
    </div>
  );
}
