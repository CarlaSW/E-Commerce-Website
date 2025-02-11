import { useNavigate } from "react-router-dom";
import styles from "./categories.module.css";
import { useContext, useState } from "react";
import { UserContext } from "../context/Provider";
export default function Category({ category }) {
  const { selectedCategory, setSelectedCategory } = useContext(UserContext);
  //console.log(category._id);
  const navigate = useNavigate();
  function handleCategoryClick() {
    console.log(category._id);
    setSelectedCategory(category._id);
    navigate(`/category/${category._id}`, { state: { category } });
  }
  return (
    <div className={styles.categoryContainer} onClick={handleCategoryClick}>
      <img className={styles.categoryImage} src={category.image}></img>
      <p className={styles.categoryName}>{category.name}</p>
    </div>
  );
}
