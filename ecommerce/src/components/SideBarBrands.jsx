import { useContext } from "react";
import { UserContext } from "../context/Provider";
import Category from "./Category";
import styles from "../pages/categoryPage.module.css";
import { useNavigate } from "react-router-dom";

export default function SideBarBrands() {
  const { brands, setBrands, selectedBrandId, setSelectedBrandId } =
    useContext(UserContext);
  const navigate = useNavigate();
  function handleClick(brand) {
    navigate(`/brand/${selectedBrandId}`, { state: { brand } });
    setSelectedBrandId(brand._id);
    //console.log("selected:", selectedCategory);
  }

  return (
    <div className={styles.sideBarConatiner}>
      {brands.map((brand) => {
        //<p>{category.name}</p>;
        //console.log(category.name);
        return (
          <button
            className={styles.categoryButtons}
            key={brand._id}
            onClick={() => {
              handleClick(brand);
            }}
          >
            {brand.name}
          </button>
        );
      })}
    </div>
  );
}
