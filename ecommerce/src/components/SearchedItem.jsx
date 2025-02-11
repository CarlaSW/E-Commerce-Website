import { useNavigate } from "react-router-dom";
import styles from "./wishlist.module.css";
export default function SearchedItem({ searchedItem }) {
  const navigate = useNavigate();
  function handleNavigateToProduct() {
    navigate(`/product/${searchedItem.id}`);
  }
  return (
    <div className={styles.itemContainer}>
      <>{console.log(searchedItem)}</>
      <div>
        <img className={styles.image} src={searchedItem.imageCover}></img>
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <p className={styles.name}>{searchedItem.title}</p>
          <p className={styles.price}>EGP {searchedItem.price}</p>
        </div>
        <button
          className={styles.navigateButton}
          onClick={handleNavigateToProduct}
        >
          See Product
        </button>
      </div>
    </div>
  );
}
