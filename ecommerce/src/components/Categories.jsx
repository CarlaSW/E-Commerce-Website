import { useContext, useEffect, useState } from "react";
import styles from "./categories.module.css";
import Category from "./Category";
import { UserContext } from "../context/Provider";
export default function Categories() {
  const URL = "https://ecommerce.routemisr.com/api/v1/categories";
  const { categories, setCategories } = useContext(UserContext);

  return (
    <div className={styles.categoriesBar}>
      <h1 className={styles.categoriesTitle}>Categories</h1>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => {
          return <Category key={category._id} category={category} />;
        })}
      </div>
    </div>
  );
}
