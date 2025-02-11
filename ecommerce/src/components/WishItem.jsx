import { useContext, useState } from "react";
import styles from "./wishlist.module.css";
import { UserContext } from "../context/Provider";
export default function WishItem({ wishItem }) {
  const URLremove = `https://ecommerce.routemisr.com/api/v1/wishlist/${wishItem.id}`;
  const URL = "https://ecommerce.routemisr.com/api/v1/cart";
  const { cart, setCart, token } = useContext(UserContext);
  const [isAdded, setIsAdded] = useState(false);

  //console.log("wishItem : ", wishItem);
  async function handleRemoveFromWishlist() {
    try {
      const response = await fetch(URLremove, {
        method: "Delete",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Cannot remove item from wishlist !!!");
      }
      const result = await response.json();
      console.log("Removed ...");
      console.log(result);
    } catch (error) {
      console.error("Error : ", error);
    }
  }
  async function handleAddToCart() {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    try {
      //console.log("vjhvvvvvvvvvv");
      const response = await fetch(URL, {
        method: "Post",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: wishItem.id }),
      });
      if (!response.ok) {
        throw new Error("Cannot add this item to cart !!!");
      }
      const result = await response.json();
      console.log("result of cart item:", result);
    } catch (error) {
      console.error("Error ;", error);
    }
  }

  return (
    <div className={styles.itemContainer}>
      <div>
        <img className={styles.image} src={wishItem.imageCover}></img>
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <p className={styles.name}>{wishItem.title}</p>
          <p className={styles.price}>EGP {wishItem.price}</p>
        </div>
        <div className={styles.right}>
          <button className={styles.remove} onClick={handleRemoveFromWishlist}>
            💔
          </button>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            Add To Cart
            {isAdded ? (
              <>
                <span className={styles.addedToCart}>Added to cart ✅</span>
              </>
            ) : null}
          </button>
        </div>
      </div>
    </div>
  );
}
