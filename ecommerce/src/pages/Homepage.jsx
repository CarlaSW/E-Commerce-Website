import { useContext, useEffect, useState } from "react";
import styles from "./homepage.module.css";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Brands from "../components/Brands";
import Search from "../components/Search";
import SearchedItems from "../components/SearchedItems";
import { UserContext } from "../context/Provider";

export default function Homepage() {
  const { query, setQuery } = useContext(UserContext);
  window.scrollTo(0, 0);
  return (
    <div className={`${styles.wholePage} ${styles.pageBackground2}`}>
      <Header />

      {query ? (
        <SearchedItems />
      ) : (
        <div className={styles.bars}>
          <div className={styles.categoriesContainer}>
            <Categories />
          </div>
          <div className={styles.BrandsConatiner}>
            <Brands />
          </div>
        </div>
      )}
    </div>
  );
}
