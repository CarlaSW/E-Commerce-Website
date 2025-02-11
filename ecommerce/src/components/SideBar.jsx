import { useContext } from "react";
import { UserContext } from "../context/Provider";
import Category from "./Category";
import styles from "../pages/categoryPage.module.css";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useContext(UserContext);
  const navigate = useNavigate();
  function handleClick(category) {
    navigate(`/category/${selectedCategory}`, { state: { category } });
    setSelectedCategory(category._id);
    //console.log("selected:", selectedCategory);
  }

  return (
    <div className={styles.sideBarConatiner}>
      {categories.map((category) => {
        //<p>{category.name}</p>;
        //console.log(category.name);
        return (
          <button
            className={styles.categoryButtons}
            key={category._id}
            onClick={() => {
              handleClick(category);
            }}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
